// Constants
const DODECAHEDRON_RADIUS = 6; // Increased from 4 to 6
const AURA_SCALE = 1.2;
const CAMERA_FOV = 75;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;
const CAMERA_RADIUS = 20; // Increased from 15 to 20
const AUTO_ROTATE_SPEED = 0.002;
const STAR_PARTICLES = 100; // New star/atom particles
const EMBER_PARTICLES = 20; // Reduced for subtlety
const SMOKE_PARTICLES = 15; // Reduced for subtlety
const INTERACTION_TIMEOUT = 3000;

// Initialize Three.js scene
const canvas = document.querySelector('#bg');
if (!canvas) {
  console.error('Canvas element not found');
  throw new Error('Canvas element not found');
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  CAMERA_FOV,
  window.innerWidth / window.innerHeight,
  CAMERA_NEAR,
  CAMERA_FAR
);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

if (!renderer.getContext()) {
  console.error('WebGL not supported');
  throw new Error('WebGL not supported');
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, CAMERA_RADIUS);

// Dodecahedron Geometry
const dodecahedronGeometry = new THREE.DodecahedronGeometry(DODECAHEDRON_RADIUS, 1);
dodecahedronGeometry.computeVertexNormals();

const dodecahedronMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    uniform float time;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vUv = uv;
      vec3 pos = position;
      float noise = sin(pos.x * 5.0 + time) * cos(pos.y * 5.0 + time) * 0.08;
      pos += normal * noise;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    precision lowp float;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    uniform float time;
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    float fbm(vec2 p) {
      float v = 0.0;
      for (float i = 1.0; i <= 3.0; i *= 2.0) {
        v += noise(p * i) / i;
      }
      return v;
    }
    void main() {
      float n = fbm(vUv * 8.0 + time * 0.02);
      float glow = smoothstep(0.4, 0.8, n) * 0.25;
      float fresnel = pow(1.0 - dot(vNormal, normalize(cameraPosition - vPosition)), 2.5);
      float ambientOcclusion = 0.5 + 0.5 * dot(vNormal, vec3(0, 0, 1));
      float brightness = 0.55 + 0.4 * ambientOcclusion + fresnel * 0.5 + glow;
      gl_FragColor = vec4(vec3(brightness), 1.0);
    }
  `,
  uniforms: { time: { value: 0 } }
});
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
scene.add(dodecahedron);

// Aura
const auraGeometry = dodecahedronGeometry.clone();
const positions = auraGeometry.attributes.position.array;
for (let i = 0; i < positions.length; i += 3) {
  positions[i] *= AURA_SCALE;
  positions[i + 1] *= AURA_SCALE;
  positions[i + 2] *= AURA_SCALE;
}
auraGeometry.attributes.position.needsUpdate = true;
auraGeometry.computeVertexNormals();

const auraMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision lowp float;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float time;
    void main() {
      vec3 viewDir = normalize(cameraPosition - vPosition);
      float fresnel = pow(1.0 - dot(vNormal, viewDir), 3.0);
      float pulse = 0.5 + 0.5 * sin(time * 1.2);
      float glow = fresnel * pulse * 0.4;
      gl_FragColor = vec4(vec3(0.9), glow * 0.15);
    }
  `,
  uniforms: { time: { value: 0 } },
  transparent: true,
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide
});
const aura = new THREE.Mesh(auraGeometry, auraMaterial);
scene.add(aura);

// Stars/Atoms
const starGeometry = new THREE.BufferGeometry();
const starPositions = [];
const starColors = [];
const starSizes = [];
for (let i = 0; i < STAR_PARTICLES; i++) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.random() * Math.PI;
  const radius = 15 + Math.random() * 5; // Increased from 10 to 15
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  starPositions.push(x, y, z);
  starColors.push(1.0, 1.0, 1.0); // Pure white
  starSizes.push(0.05 + Math.random() * 0.05); // Tiny, varied sizes
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
starGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));
const starMaterial = new THREE.PointsMaterial({
  size: 0.1,
  vertexColors: true,
  transparent: true,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true
});
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Embers
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = [];
const particleColors = [];
for (let i = 0; i < EMBER_PARTICLES; i++) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.random() * Math.PI;
  const radius = 9 + Math.random() * 1.0; // Increased from 6 to 9
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  particlePositions.push(x, y, z);
  particleColors.push(0.8, 0.8, 0.8); // Light gray for subtlety
}
particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(particleColors, 3));
const particleMaterial = new THREE.PointsMaterial({
  size: 0.1,
  vertexColors: true,
  transparent: true,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// Smoke
const smokeGeometry = new THREE.BufferGeometry();
const smokePositions = [];
const smokeColors = [];
for (let i = 0; i < SMOKE_PARTICLES; i++) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.random() * Math.PI;
  const radius = 10.5 + Math.random() * 1.5; // Increased from 7 to 10.5
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  smokePositions.push(x, y, z);
  smokeColors.push(0.3, 0.3, 0.3); // Darker gray for subtlety
}
smokeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(smokePositions, 3));
smokeGeometry.setAttribute('color', new THREE.Float32BufferAttribute(smokeColors, 3));
const smokeMaterial = new THREE.PointsMaterial({
  size: 0.6,
  vertexColors: true,
  transparent: true,
  opacity: 0.2,
  blending: THREE.AdditiveBlending
});
const smoke = new THREE.Points(smokeGeometry, smokeMaterial);
scene.add(smoke);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0); // Brighter for high contrast
directionalLight.position.set(8, 8, 8);
scene.add(directionalLight);

const rimLight = new THREE.DirectionalLight(0xffffff, 0.8); // Neutral white rim light
rimLight.position.set(-5, 5, -5);
scene.add(rimLight);

const ambientLight = new THREE.AmbientLight(0x333333, 0.5); // Neutral gray ambient
scene.add(ambientLight);

// Interactivity
let isDragging = false;
let previousMouse = new THREE.Vector2();
let theta = 0;
let phi = Math.PI / 2;
let lastInteraction = Date.now();

function updateMouse(e, isTouch = false) {
  const x = isTouch ? e.touches[0].clientX : e.clientX;
  const y = isTouch ? e.touches[0].clientY : e.clientY;
  const mouse = new THREE.Vector2(
    (x / window.innerWidth) * 2 - 1,
    -(y / window.innerHeight) * 2 + 1
  );
  if (isDragging) {
    const deltaX = mouse.x - previousMouse.x;
    const deltaY = mouse.y - previousMouse.y;
    theta -= deltaX * 1.5;
    phi = Math.max(0.2, Math.min(Math.PI - 0.2, phi - deltaY * 1.5));
    lastInteraction = Date.now();
  }
  previousMouse.copy(mouse);
}

function addEventListeners() {
  if (!canvas) return;
  canvas.addEventListener('mousedown', () => {
    isDragging = true;
    lastInteraction = Date.now();
  });
  canvas.addEventListener('mouseup', () => { isDragging = false; });
  canvas.addEventListener('mousemove', updateMouse);
  canvas.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateMouse(e, true);
    lastInteraction = Date.now();
  }, { passive: false });
  canvas.addEventListener('touchend', () => { isDragging = false; });
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    updateMouse(e, true);
  }, { passive: false });
}

// Animation
let time = 0;
let animationId = null;

function animate() {
  time += 0.02;

  dodecahedronMaterial.uniforms.time.value = time;
  auraMaterial.uniforms.time.value = time;
  dodecahedron.rotation.y += 0.003;
  aura.rotation.y += 0.003;

  // Animate stars/atoms
  const starPos = starGeometry.attributes.position.array;
  for (let i = 0; i < starPos.length; i += 3) {
    starPos[i] += Math.sin(time + i) * 0.005;
    starPos[i + 1] += Math.cos(time + i) * 0.005;
    if (Math.sqrt(starPos[i] ** 2 + starPos[i + 1] ** 2 + starPos[i + 2] ** 2) > 20) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 15;
      starPos[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPos[i + 2] = radius * Math.cos(phi);
    }
  }
  starGeometry.attributes.position.needsUpdate = true;

  // Animate embers
  const particlePos = particleGeometry.attributes.position.array;
  for (let i = 0; i < particlePos.length; i += 3) {
    particlePos[i + 1] += 0.01;
    if (particlePos[i + 1] > 12) particlePos[i + 1] = -12;
  }
  particleGeometry.attributes.position.needsUpdate = true;

  // Animate smoke
  const smokePos = smokeGeometry.attributes.position.array;
  for (let i = 0; i < smokePos.length; i += 3) {
    smokePos[i] += Math.sin(time + i) * 0.006;
    smokePos[i + 1] += 0.006;
    if (smokePos[i + 1] > 13.5) smokePos[i + 1] = -13.5;
  }
  smokeGeometry.attributes.position.needsUpdate = true;

  if (Date.now() - lastInteraction > INTERACTION_TIMEOUT && !isDragging) {
    theta += AUTO_ROTATE_SPEED;
  }

  camera.position.x = CAMERA_RADIUS * Math.sin(phi) * Math.cos(theta);
  camera.position.y = CAMERA_RADIUS * Math.cos(phi);
  camera.position.z = CAMERA_RADIUS * Math.sin(phi) * Math.sin(theta);
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
  animationId = requestAnimationFrame(animate);
}

function startAnimation() {
  if (!animationId) {
    animationId = requestAnimationFrame(animate);
  }
}

function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

// Window Events
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);

// Navigation
function setupNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) {
    console.warn('Navigation elements not found');
    return;
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').slice(1); // Fixed typo: targetitoria to targetId
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, `#${targetId}`);
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        anchor.classList.add('active');
      }
    });
  });

  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Scroll Handling
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  const currentScrollY = window.scrollY;
  const header = document.querySelector('header');
  if (header) {
    header.classList.toggle('scrolled', currentScrollY > 30);
    header.style.transform = currentScrollY > lastScrollY && currentScrollY > 80 ? 'translateY(-100%)' : 'translateY(0)';
  }
  lastScrollY = currentScrollY;
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('touchmove', onScroll, { passive: true });

// Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: window.innerWidth <= 768 ? 0.15 : 0.25,
    rootMargin: '0px 0px -10% 0px'
  }
);

function setupObserver() {
  document.querySelectorAll('.work, .about, .experience, .contact').forEach(section => {
    section.classList.add('animate-hidden');
    observer.observe(section);
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('animate');
      observer.unobserve(section);
    }
  });
}

// Network Status
function handleNetworkStatus() {
  if (!navigator.onLine) {
    stopAnimation();
    if (window.location.pathname !== '/offline.html') {
      window.location.href = 'offline.html';
    }
  } else {
    if (window.location.pathname === '/offline.html') {
      window.location.href = 'index.html';
    }
    startAnimation();
  }
}

window.addEventListener('online', handleNetworkStatus);
window.addEventListener('offline', handleNetworkStatus);

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => console.error('Service Worker Error:', err));
  });
}

// Initialize
function init() {
  addEventListeners();
  setupNavigation();
  setupObserver();
  handleNetworkStatus();
  startAnimation();
}

document.addEventListener('DOMContentLoaded', init);
