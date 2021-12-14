# Paioe

## Cần làm
- [Công cụ] Các công cụ
    - Emoji [Ctrl + Alt + I], kí tự đặc biệt (gộp vào emoji)
    - Find [Ctrl + F], Replace [Ctrl + H]
    - In [Ctrl + P], xuất ra PDF, HTML, EPUB, TXT
    - Bàn phím ảo
    - Hình nền (cho khung soạn thảo)
    - Chụp ảnh màn hình https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture, chụp xong thì dán vào công cụ sửa ảnh như ở dưới
    - Giải toán tự động (dựa trên việc click vào khối toán, nhập toán, quét toán,... - giải được nhiều dạng toán, kết quả đa dạng)
    - Thay đổi ngôn ngữ (mặc định sẽ là qua tag HTML <editor-lang> hoặc trình duyệt hoặc tiếng Anh - dùng cho đọc to văn bản và kiểm tra chính tả) - lưu bản dịch ở file CSV
    - Đọc to văn bản (https://www.section.io/engineering-education/text-to-speech-in-javascript/)
    - Kiểm tra chính tả (https://www.javascriptspellcheck.com/)
    - Thống kê (số từ, số kí tự, số kí tự không khoảng cách, số đoạn)
    - Trợ giúp [Ctrl + Alt + H]: Trợ giúp sử dụng, xem change log, phím tắt ; Credit/đóng góp (có các link: Link tác giả, Link repos Github, đóng góp/phản hồi)
    - CryptoJS
    - Set header - footer (fixed pos)
    - Cho phép chèn Script (chèn thẳng vào document, cho biết các khái niệm cơ bản như các elms của HTML và lưu ý \"Be careful... chỉ paste script bạn tin tưởng và hiểu rõ\")
- [Khối] Ảnh: Chèn ảnh (sửa kích thước mọi scale, nhập kích thước cụ thể, cho thêm Chú thích ảnh, sửa ảnh như sketch): upload, qua URL, vẽ sketch. Trong đó, tính năng vẽ sketch thì như checklist
    - Đổi màu pen, hình vẽ ra
    - Bộ Shapes sẵn, có cả bộ emoji được tích hợp luôn
    - Chèn text
    - Chọn màu từ ảnh, xoá nền
    - Xuất ảnh ra các định dạng (In, PNG, JPG, JPEG, SVG, PDF, word,...), copy vào Clipboard
    - Chèn ảnh
    - Chỉnh sửa vị trí hiển thị ảnh (img-position)
    - Tích hợp nhiều tính năng của Mindmap
    - Crop ảnh
- [Khối] Các khối khác
    - Toggle, quote, quote có source, công thức toán học, code (có tự động màu)
    - Table (có chế độ fullscreen table - và quản lí table y như Excel, Google Sheet), kanban board, gallery, calendar, timeline - có đầy đủ công cụ quản lí các khối này, có form để nhập dạng form vào các dạng này
    - Todo list: thêm - xoá - sửa - comment - đặt ngày - đặt repeat - xem dạng lịch - áp filter - gắn tag - gắn độ quan trọng - thông báo – xem task đã hoàn thành - theo dõi tiến độ, phân tích todolist (của note đấy thôi)
    - Chèn file / video (có preview cho một vài định dạng) / âm thanh ghi âm trực tiếp
    - Chèn biểu đồ (thanh, cột, đường kẻ, tròn) - có công cụ bảng để nhập dữ liệu
    - Bình luận – tạo một cuộc hội thoại và có nút xoá – sửa
    - Iframe
    - Style frame (là khối cho phép set CSS)
- Cho nhúng iframe, cho ví dụ về code onchange/get/set editor HTML
- Cố gắng hỗ trợ nhiều trình duyệt, hệ điều hành, nhiều thiết bị
- https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
    
## Đang làm
- Lỗi resize toàn bộ, replace H1, H2, H3,...
- Fix không underline được whole text
- Đầu dòng: Chấm/số/chữ [(Inl) - / + / * / 1. / 1) / a. / a) / nhiều loại nữa - cả hoa lẫn thường, cả la mã, gạch ngang...] - cho phép chỉnh "start"
    - https://hoclaptrinh.vn/tutorial/hoc-html/tao-danh-sach-trong-html
- Viết hoa đầu câu, viết thường toàn bộ, viết hoa toàn bộ, viết hoa đầu từ
- Thụt [Tab], lùi [Shift + Tab]
- Quay lại [Ctrl + Z], đi tiếp [Ctrl + Y], cut [Ctrl + X], copy [Ctrl + C], copy format [Ctrl + Shift + Alt + C], paste [Ctrl + V], paste plain text [Ctrl + Shift + V], paste format [Ctrl + Shift + Alt + V], chọn tất cả [Ctrl + A], xoá [Del]
- Chèn thanh ngang (cho chỉnh màu, style,... - gõ qua bàn phím)
- Dung lượng nhẹ, làm hết bằng JQuery
- Copy-paste format

## Hoàn thành
- Sửa cách hiển thị text/bg color
- Fix lỗi link
- Fix [object HTMLDivElement]
- Double underline
- Màu chữ, nền chữ
- Fix bug zindex
- Chỉnh link - popup có nút xem, unlink - tự động createLink khi paste = link
- In đậm [Ctrl + B], nghiên [Ctrl + I], gạch dưới [Ctrl + U], gạch ngang - strikethrough [Ctrl + Alt + T], gạch trên [Ctrl + Alt + O], chữ trên (như số mũ) - dưới, xoá định dạng
- Font (tham khảo từ Microsoft Word), size chữ (cho tuỳ chỉnh) [Ctrl + Shift + < / > để chỉnh size]
- Căn trái - phải - giữa - đều [Ctrl + Alt + L/C/R/J]

# Paion
- Tên app: Paion (Phong's All In One Note)
- Các tính năng:
	- Khung soạn thảo Paioe
	- Cho tạo nhiều folder và mỗi một ghi chú như một file (hiển thị dung lượng file - folder).
	- Đồng bộ mỗi 4 giây "trong khi" đang focus vào editor (nếu không có Wifi thì tạm dừng cho đến khi có)
- Hỏi đáp, feedback
- Workspace (chưa làm vội):
	- Cho phép copy một ghi chú về làm template của mình
	- Biến một folder thành cho một team (tính dung lượng lưu trữ vào team trưởng)
	- Chỉnh sửa live-time, đặt vai trò - quyền hạn
	- Chat, call (như Zoom)
	- Cho phép share ghi chú ở dạng: công khai ; không công khai, phải add cụ thể người vô mới truy cập được