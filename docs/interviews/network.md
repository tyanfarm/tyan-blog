---
sidebar_position: 4
---

# Network

---

## 7 tầng mô hình OSI
- Physical (Tầng Vật Lý)
    + Xử lý truyền qua cáp quang hoặc vô tuyến

- Data Link (Tầng Liên Kết)
    + Đánh địa chỉ vật lý (địa chỉ MAC)
    + Thiết bị: Switch, Bridge

- Network (Tầng mạng)
    + Xử lý việc đánh địa chỉ IP
    + Định tuyến (routing)
    + Chuyển tiếp gói tin giữa các mạng khác nhau
    + Thiết bị: Router

- Transport (Tầng vận chuyển)
    + Đảm bảo dữ liệu được chuyển đi đáng tin cậy và không lỗi. 
    + Chia dữ liệu thành các đoạn nhỏ (segmentation)
    + Kiểm soát luồng dữ liệu (flow control)
    + Xử lý các yêu cầu về độ tin cậy (TCP) hoặc tốc độ (UDP)
    + Giao thức:
        + TCP (Transmission Control Protocol)
        + UDP (User Datagram Protocol)

- Session (Tầng phiên)
    + Quản lý các phiên làm việc giữa các thiết bị khác nhau
    + Giao thức:
        + NetBIOS (Network Basic Input/Output System)

- Presentation (Tầng trình bày)
    + Thực hiện mã hóa/giải mã, nén/giải nén, chuyển đổi định dạng dữ liệu giữa các hệ thống.
    + Giao thức:
        + SSL/TLS (Secure Socker Layer / Transport Layer Security)
        + ASCII
        + Các định dạng file (JPEG, JPG, PNG, ...)

- Application (Tầng ứng dụng)
    + Tầng để người dùng tương tác trực tiếp với ứng dụng
    + Giao thức: 
        - DHCP: giao thức cấp IP và các thông số mạng tự động cho thiết bị
        - DNS: hệ thống phân giải tên miền thành IP
        - SMTP (Simple Mail Transfer Protocol)
        - FTP (File Transfer Protocol)
        - HTTP (HyperText Transfer Protocol)

## SSL / TLS là gì
- Đều là các giao thức dùng để mã hóa và bảo mật dữ liệu truyền qua mạng, đặc biệt là Internet.
- TLS là phiên bản nâng cấp của SSL, sửa các lỗ hổng và cung cấp các thuật toán mã hóa tốt hơn.
- Các chức năng:
    + Mã hóa
    + Xác thực thông qua chứng chỉ số (digital certificate)
    + Bảo vệ toàn vẹn dữ liệu bằng các mã băm như SHA (Secure Hash Algorithm)

## HTTP khác HTTPS như thế nào
- HTTP - HyperText Transfer Protocol
    + Dữ liệu không được mã hóa, không được xác thực
    + Giao tiếp qua cổng 80
- HTTPS - HyperText Transfer Protocol Secure
    + Là phiên bản bảo mật hơn của HTTP
    + Dữ liệu được mã hóa bằng SSL/TLS, được xác thực bằng chứng chỉ số (digital certificates)
    + Giao tiếp qua cổng 443
- HTTPS có thể chậm hơn HTTP vì phải qua các bước mã hóa và xác thực nhưng không đáng kể.

## TCP và UDP là gì
- TCP (Transmission Control Protocol)
    + Là giao thức hướng kết nối. Trước khi truyền dữ liệu, nó sẽ thiếp lập một kết nối giữa 2 thiết bị sau đó dữ liệu mới được truyền đi.
    + Đảm bảo dữ liệu được truyền tin toàn vẹn và đúng thứ tự. Nếu sai thì sẽ gửi lại gói tin.
    + Có kiểm soát luồng (flow control) và kiểm tra lỗi (error detection)
    + Thường được dùng cho các ứng dụng yêu cầu độ chính xác cao như STMP, FTP, HTTP/HTTPS

- UDP (User Datagram Protocol)
    + Là giao thức không kết nối. Nghĩa là không thiết lập kết nối trước khi truyền dữ liệu và các gói tin sẽ được gửi độc lập, không quan tâm có đến đích hay không.
    + Không đảm bảo thứ tự và toàn vẹn
    + Thường được dùng cho các ứng dụng yêu cầu tốc độ cao như livestream video, DNS, ...

## Socket & WebSocket
- `Socket` là 1 `giao diện ứng dụng` giúp các ứng dụng giao tiếp qua mạng, sử dụng các giao thức TCP hoặc UDP để truyền dữ liệu.
- `WebSocket` là 1 giao thức kết nối 2 chiều giữa máy chủ và máy khách qua 1 TCP duy nhất. Điểm khác so với `HTTP` là WebSocket cho phép truyền dữ liệu 2 chiều mà không cần đóng mở kết nối liên tục.

## Bắt tay 3 bước diễn ra như thế nào
- B1: Máy khách gửi gói `SYN` tới máy chủ để yêu cầu kết nối.
- B2: Máy chủ gửi gói `SYN-ACK` chứa 1 thông báo `ACK` xác nhận gói tin SYN của máy khách và 1 gói `SYN` mới từ máy chủ.
- B3: Máy khách gửi gói `ACK` để xác nhận đã nhận gói `SYN` từ máy chủ

- Sau 3 bước này thì kết nối TCP được thiết lập.

