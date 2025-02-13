<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Trang web báo tường trực tuyến mừng ngày Nhà giáo Việt Nam 20/11">
    <title>Báo Tường 20/11</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link tới CSS -->
    <script src="script.js" defer></script> <!-- Link tới JavaScript -->
</head>
<body>
    <header>
        <h1>Báo Tường Mừng Ngày Nhà Giáo Việt Nam 20/11</h1>
        <nav>
            <ul>
                <li><a href="#home">Trang Chủ</a></li>
                <li><a href="#tribute">Lời Tri Ân</a></li>
                <li><a href="#gallery">Thư Viện Hình Ảnh</a></li>
                <li><a href="#messages">Thông Điệp</a></li>
                <li><a href="#contact">Liên Hệ</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <div class="intro">
                <h2>Chào Mừng Các Thầy Cô Đến Với Ngày Nhà Giáo Việt Nam 20/11!</h2>
                <p>Trang web báo tường trực tuyến này nhằm tri ân các thầy cô giáo, những người đã cống hiến cả đời cho sự nghiệp giáo dục. Hãy cùng tham gia và gửi những lời chúc tốt đẹp tới các thầy cô nhé!</p>
                <button onclick="scrollToSection('#tribute')">Tri Ân Ngay</button>
            </div>
        </section>

        <section id="tribute">
            <h2>Lời Tri Ân</h2>
            <p>Cảm ơn các thầy cô đã truyền đạt không chỉ kiến thức mà còn là những bài học quý giá về cuộc sống, về cách làm người. Mỗi ngày trôi qua, chúng em luôn nhớ ơn sự tận tâm và tình yêu nghề của các thầy cô. Chúc các thầy cô luôn mạnh khỏe và thành công trên con đường giáo dục!</p>
            <div class="tribute-box">
                <h3>Lời Chúc Của Các Học Sinh</h3>
                <div class="message">
                    <p>"Thầy cô là ngọn đèn soi sáng con đường của chúng em, cảm ơn thầy cô rất nhiều!"</p>
                    <p><strong>- Học sinh Lớp 12B4</strong></p>
                </div>
                <div class="message">
                    <p>"Chúng em sẽ luôn nhớ đến những bài học thầy cô dạy, không chỉ trong sách vở mà còn trong cuộc sống."</p>
                    <p><strong>- Học sinh Lớp 12B2</strong></p>
                </div>
            </div>
        </section>
        <section id="gallery">
            <h2>Thư Viện Hình Ảnh</h2>
            <div class="gallery-container">
                <img src="https://www.simpleimageresizer.com/_uploads/photos/d974d0fc/bich.png_50.jpg" alt="Thầy Cô 1" class="gallery-item">
                <img src="https://www.simpleimageresizer.com/_uploads/photos/d974d0fc/huong.png_1_50.jpg" alt="Thầy Cô 2" class="gallery-item">
                <img src="https://www.simpleimageresizer.com/_uploads/photos/d974d0fc/nga.png_50.jpg" alt="Thầy Cô 3" class="gallery-item">
                <img src="https://www.simpleimageresizer.com/_uploads/photos/d974d0fc/nguyet.png_50.jpg" alt="Thầy Cô 4" class="gallery-item">
            </div>
        </section>
        <section id="messages">
            <h2>Gửi Thông Điệp Đến Các Thầy Cô</h2>
            <form id="messageForm">
                <label for="name">Tên:</label>
                <input type="text" id="name" name="name" placeholder="Nhập tên của bạn" required>

                <label for="message">Thông Điệp:</label>
                <textarea id="message" name="message" placeholder="Viết thông điệp của bạn tại đây..." rows="5" required></textarea>

                <button type="submit">Gửi Thông Điệp</button>
            </form>
        </section>
        <section id="contact">
            <h2>Liên Hệ</h2>
            <p>Để biết thêm thông tin về các hoạt động hoặc gửi thắc mắc, vui lòng liên hệ với chúng tôi qua email: <a href="hiennguyenthithu07@gmail.com">hiennguyenthithu07@gmail.com</a></p>
        </section>
    </main>

    <footer>
        <p> Mừng Ngày Nhà Giáo Việt Nam 20/11!</p>
        <p>Báo tường Hiên Nguyễn, Na, Học, Thùy</p>
    </footer>
</body>
</html>


