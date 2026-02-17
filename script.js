function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav ul li a[href="#${tabId}"]`).classList.add('active');
}
// Show Home tab by default on load
window.onload = function() {
    showTab('home');
};
