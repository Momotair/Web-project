
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        
        // إظهار جميع العناصر بعد انتهاء التحميل
        // document.querySelector('header').style.display = 'block';
        // document.querySelector('nav').style.display = 'block';
        // document.querySelector('aside').style.display = 'block';
        // document.querySelector('footer').style.display = 'block';
        // document.querySelector('main').style.display = 'block';
        
        document.body.style.overflow = 'auto'; // إعادة تمكين التمرير
    }, 1000); 
};

function Menu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); // إضافة أو إزالة الفئة "show" لإظهار العناصر
}
// احصل على العناصر من الصفحة
const toggleSidebarButton = document.getElementById('toggleSidebar');
const closeSidebarButton = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

// وظيفة لفتح الشريط الجانبي
toggleSidebarButton.onclick = function() {
    sidebar.style.display = 'block'; // عرض الشريط الجانبي
};

// وظيفة لإغلاق الشريط الجانبي
closeSidebarButton.onclick = function() {
    sidebar.style.display = 'none'; // إخفاء الشريط الجانبي
};


