function handleClick(linkName) {
    console.log(`點擊了: ${linkName}`);
    // 這裡可以加入 Google Analytics 或其他追蹤代碼
}

// 個人頭像點擊效果
document.getElementById('profileImage').addEventListener('click', function() {
    this.style.transform = 'scale(1.1) rotate(360deg)';
    setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
    }, 600);
});
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
	targetX = (e.clientX / window.innerWidth - 0.5) * 20; // -10 ~ +10
	targetY = (e.clientY / window.innerHeight - 0.5) * 20;
});

function animateParallax() {
	// 緩慢靠近 targetX/Y
	currentX += (targetX - currentX) * 0.1;
	currentY += (targetY - currentY) * 0.1;

	container.style.transform = `translate(${currentX}px, ${currentY}px)`;

	requestAnimationFrame(animateParallax);
}

animateParallax();