// Particles.js - Neon Orange Square Particles Animation

// Set up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Resize the canvas to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle Array
let particles = [];

// Particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;  // Gradually reduce the size
    }
    draw() {
        ctx.fillStyle = 'rgba(255, 140, 0,' + this.size / 5 + ')'; // Neon Orange Color
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// Create particles function
function createParticles(e) {
    const xPos = e.x;
    const yPos = e.y;
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}

// Animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}

// Event Listener
window.addEventListener('mousemove', createParticles);

// Start Animation
animate();