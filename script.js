// ژمارەی خاڵەکان
const numTrails = 10;
const trails = [];

// دروستکردنی خاڵەکان لەناو HTML-دا
for (let i = 0; i < numTrails; i++) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);
    trails.push(trail);
}

// دۆزینەوەی دەقی زانیارییەکان
const infoText = document.getElementById("info-text");

// گۆڕاوەکان بۆ زانینی کاتی وەستان
let timer;
let isMoving = false;

// کاتێک ماوسەکە جووڵا
document.addEventListener("mousemove", (e) => {
    isMoving = true;
    infoText.style.display = "none"; // شاردنەوەی دەقەکە کاتێک ماوس دەجووڵێت

    // نوێکردنەوەی شوێنی هەر خاڵێک
    for (let i = 0; i < trails.length; i++) {
        // دانانی شوێنی خاڵەکە کەمێک دوای شوێنی ماوسەکە
        // i * 5 بۆ ئەوەی خاڵەکان لە یەک دوور کەونەوە
        const trail = trails[i];
        trail.style.left = (e.clientX - 10 + i * 5) + "px";
        trail.style.top = (e.clientY - 10 + i * 5) + "px";
        trail.style.transform = scale(${1 - i * 0.1}); // کەمکردنەوەی قەبارە بۆ خاڵەکان لە کۆتاییەکەدا
    }

    // پاککردنەوەی تایمەرەکە ئەگەر هەبێت
    clearTimeout(timer);

    // زانینی کاتی وەستان
    timer = setTimeout(() => {
        isMoving = false;
        infoText.style.display = "block"; // نیشاندانەوەی دەقەکە کاتێک ماوس دەوەستێت

        // نیشاندانی دەقی سەر خاڵەکە
        for (let i = 0; i < trails.length; i++) {
            const trail = trails[i];
            trail.classList.add("stopped");
        }
    }, 500); // وەک پێویست ئەم ژمارەیە بگۆڕە (بۆ زانینی کاتی وەستان)

    // لادانی کلاسەکە ئەگەر هەبێت
    for (let i = 0; i < trails.length; i++) {
        const trail = trails[i];
        trail.classList.remove("stopped");
    }
});