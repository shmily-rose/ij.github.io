function scrollToSection(id) {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thông điệp của bạn đã được gửi!');
});