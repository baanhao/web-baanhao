// script.js
document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; // รับเนื้อหาถัดไป
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block"; // แสดงเนื้อหา
        } else {
            content.style.display = "none"; // ซ่อนเนื้อหา
        }
    });
});
