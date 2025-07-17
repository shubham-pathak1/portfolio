// Constants
const CAMERA_FOV = 75;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;
const CAMERA_Z = 10;
const PARTICLE_COUNT = 500; // Reduced for dreamy, sparse effect
const SCROLL_DRAG_FACTOR = 0.005; // Subtle jiggly effect on scroll
const FALLING_STARS = 5; // Adjusted for subtle meteor effect
const MOBILE_BREAKPOINT = 768; // Typical mobile breakpoint in pixels

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
const cursorRing = document.querySelector('.cursor-ring');
const cursorDot = document.querySelector('.cursor-dot');
let trailElements = [];

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        // Create trail effect
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        document.body.appendChild(trail);
        trailElements.push(trail);

        if (trailElements.length > 10) {
            const oldTrail = trailElements.shift();
            oldTrail.remove();
        }
    }

    // Update mouse interaction
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener('mousedown', () => {
    if (cursor) cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    if (cursor) cursor.classList.remove('active');
});

// Desktop Navigation
const navLinks = document.querySelector('.nav-links');

if (navLinks) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });

                links.forEach(nav => nav.removeAttribute('data-active'));
                link.setAttribute('data-active', 'true');
            }
        });
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 100; // Offset for better section detection
    const links = navLinks.querySelectorAll('a');
    let activeSectionFound = false;

    if (navLinks && links.length) {
        // Clear all active states first
        links.forEach(link => link.removeAttribute('data-active'));

        // Find the active section
        links.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.setAttribute('data-active', 'true');
                activeSectionFound = true;
            }
        });

        // If no section is active and we're near the top, activate Home
        if (!activeSectionFound && fromTop < document.getElementById(links[0].getAttribute('href').substring(1)).offsetTop + 100) {
            links[0].setAttribute('data-active', 'true');
        }
    }
});

// Contact Pop-up
const form = document.getElementById('contact-form');
const popup = document.getElementById('contact-popup');
const closePopup = document.querySelector('.popup-close');

if (form && popup) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        popup.classList.add('active');
        popup.setAttribute('aria-hidden', 'false');
        gsap.fromTo('.popup-content', 
            { opacity: 0, scale: 0.8, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    });

    closePopup.addEventListener('click', () => {
        gsap.to('.popup-content', {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                popup.classList.remove('active');
                popup.setAttribute('aria-hidden', 'true');
                form.reset();
            }
        });
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup.click();
        }
    });
};

// Mobile Bottom Navigation
const mobileNav = document.querySelector('.mobile-nav');
if (mobileNav && window.innerWidth <= MOBILE_BREAKPOINT) {
    const navItems = mobileNav.querySelectorAll('a');
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });

                navItems.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// Three.js Moon and Stars Background
function createScene(canvasId) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(CAMERA_FOV, window.innerWidth / window.innerHeight, CAMERA_NEAR, CAMERA_FAR);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvasId), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = CAMERA_Z;
    return { scene, camera, renderer };
}

const heroMoon = createScene('earth-hero-canvas');
const heroGeometry = new THREE.SphereGeometry(3.5, 64, 64); // Slightly bigger moon
const heroTexture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/moon_1024.jpg');
const heroMaterial = new THREE.MeshStandardMaterial({
    map: heroTexture,
    color: 0x808080,
    emissive: 0x000000,
    metalness: 0,
    roughness: 1
});
const heroSphere = new THREE.Mesh(heroGeometry, heroMaterial);
heroMoon.scene.add(heroSphere);

const atmosphereGeometry = new THREE.SphereGeometry(3.6, 64, 64); // Adjusted for new moon size
const atmosphereMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide
});
const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
heroMoon.scene.add(atmosphere);

const particlesGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 30; // Wider distribution for dreamy effect
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particlesMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 0.05,
    transparent: true,
    opacity: 0.5
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
heroMoon.scene.add(particles);

// Falling Stars/Meteor Effect
const fallingStarGeometry = new THREE.BufferGeometry();
const fallingStarPositions = [];
const fallingStarVelocities = [];
const fallingStarTrails = [];

for (let i = 0; i < FALLING_STARS; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.5;
    const radius = 25 + Math.random() * 5;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta) + 10;
    const z = radius * Math.cos(phi);
    fallingStarPositions.push(x, y, z);
    fallingStarVelocities.push(0.15 * (1.0 + Math.random()));
    fallingStarTrails.push(new THREE.Vector3(x, y, z));
}
fallingStarGeometry.setAttribute('position', new THREE.Float32BufferAttribute(fallingStarPositions, 3));
fallingStarGeometry.setAttribute('velocity', new THREE.Float32BufferAttribute(fallingStarVelocities, 1));

const fallingStarMaterial = new THREE.ShaderMaterial({
    vertexShader: `
        attribute float velocity;
        varying vec3 vPosition;
        uniform float time;
        void main() {
            vPosition = position;
            vec3 pos = position;
            pos.y -= velocity * time * 1.5;
            if (pos.y < -25.0) {
                pos.y = 25.0;
                pos.x = (rand(vec2(time, gl_VertexID)) - 0.5) * 30.0;
                pos.z = (rand(vec2(time, gl_VertexID + 1.0)) - 0.5) * 30.0;
            }
            gl_PointSize = 0.4 * (300.0 / length(pos - cameraPosition));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
        float rand(vec2 co) {
            return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }
    `,
    fragmentShader: `
        varying vec3 vPosition;
        void main() {
            float intensity = 1.0 - smoothstep(0.0, 0.8, length(gl_PointCoord - vec2(0.5)));
            vec3 color = mix(vec3(1.0, 0.9, 0.5), vec3(1.0, 0.8, 0.2), intensity);
            gl_FragColor = vec4(color, intensity * 0.7);
        }
    `,
    uniforms: { time: { value: 0 } },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});
const fallingStars = new THREE.Points(fallingStarGeometry, fallingStarMaterial);
heroMoon.scene.add(fallingStars);

const heroLight = new THREE.PointLight(0xffffff, 1, 100);
heroLight.position.set(10, 10, 10);
heroMoon.scene.add(heroLight);
const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
heroMoon.scene.add(ambientLight);

let mouseX = 0;
let mouseY = 0;
let scrollY = 0;
let time = 0;

function animate() {
    requestAnimationFrame(animate);
    time += 0.02;

    heroSphere.rotation.y += 0.003;
    atmosphere.rotation.y += 0.003;
    particles.rotation.y += 0.001;

    // Subtle jiggly effect on scroll for particles
    const scrollEffect = scrollY * SCROLL_DRAG_FACTOR;
    const particlePos = particlesGeometry.attributes.position.array;
    for (let i = 0; i < particlePos.length; i += 3) {
        particlePos[i] += Math.sin(scrollEffect + i * 0.1) * 0.01;
        particlePos[i + 2] += Math.cos(scrollEffect + i * 0.1) * 0.01;
        if (particlePos[i] > 30) particlePos[i] -= 60;
        if (particlePos[i] < -30) particlePos[i] += 60;
        if (particlePos[i + 2] > 30) particlePos[i + 2] -= 60;
        if (particlePos[i + 2] < -30) particlePos[i + 2] += 60;
    }
    particlesGeometry.attributes.position.needsUpdate = true;

    // Update falling stars with trail-like effect
    const fallingStarPos = fallingStarGeometry.attributes.position.array;
    const fallingStarVel = fallingStarGeometry.attributes.velocity.array;
    for (let i = 0; i < fallingStarPos.length; i += 3) {
        const idx = i / 3;
        fallingStarPos[i + 1] -= fallingStarVel[idx] * time * 1.5;
        if (fallingStarPos[i + 1] < -25.0) {
            fallingStarPos[i + 1] = 25.0;
            fallingStarPos[i] = (Math.random() - 0.5) * 30;
            fallingStarPos[i + 2] = (Math.random() - 0.5) * 30;
            fallingStarTrails[idx].set(fallingStarPos[i], fallingStarPos[i + 1], fallingStarPos[i + 2]);
        }
    }
    fallingStarGeometry.attributes.position.needsUpdate = true;

    if (fallingStarMaterial.uniforms && fallingStarMaterial.uniforms.time) {
        fallingStarMaterial.uniforms.time.value = time;
    }

    heroMoon.camera.position.x += (mouseX - heroMoon.camera.position.x) * 0.05;
    heroMoon.camera.position.y += (-mouseY - heroMoon.camera.position.y) * 0.05;
    heroMoon.camera.lookAt(heroMoon.scene.position);
    heroMoon.renderer.render(heroMoon.scene, heroMoon.camera);
}
animate();

// Resize Handler
window.addEventListener('resize', () => {
    heroMoon.camera.aspect = window.innerWidth / window.innerHeight;
    heroMoon.camera.updateProjectionMatrix();
    heroMoon.renderer.setSize(window.innerWidth, window.innerHeight);
});

// Scroll Handling
let lastScrollY = 0;
let ticking = false;

function handleScroll() {
    scrollY = window.scrollY;
    const currentScrollY = window.scrollY;
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', currentScrollY > 30);
        // Preserve centering transform and use opacity for hide/show
        header.style.opacity = currentScrollY > lastScrollY && currentScrollY > 80 ? '0' : '1';
        header.style.visibility = currentScrollY > lastScrollY && currentScrollY > 80 ? 'hidden' : 'visible';
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

// GSAP Animations with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Content Animation
gsap.fromTo('.hero-content', 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.5 }
);

// Project Cards Animation with 3D Tilt
gsap.utils.toArray('.work-item').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.3,
        ease: 'power4.out'
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
            rotationY: x * 0.05,
            rotationX: -y * 0.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
