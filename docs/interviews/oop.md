---
sidebar_position: 2
---

# OOP

---

## 4 Tính chất của OOP
- `Tính đóng gói` (Encapsulation): là tính năng `che giấu` `thông tin` của 1 đối tượng. Các đối tượng bên ngoài muốn `truy cập` hoặc `chỉnh sửa` thông tin thì phải thông qua các `phương thức công khai`.

- `Tính kế thừa` (Inheritance): các lớp con kế thừa thì sẽ thừa hưởng các `thuộc tính` và `phương thức` của lớp cha. Các lớp con có thể `mở rộng` hoặc `thay đổi hành vi` mà không cần viết lại toàn bộ mã.

- `Tính đa hình`: Các `đối tượng khác nhau` có thể thực thi 1 `hàm giống nhau` với các `cài đặt khác nhau`. 
    + Đa hình được triển khai thông qua `nạp chồng phương thức` (overloading) hoặc `ghi đè phương thức` (overriding)

- `Tính trừu tượng` (Abstraction): Thường được thực hiện thông qua `lớp trừu tượng` (Abstract Class) hoặc `giao diện` (Interface). Nó giống như 1 `bản thiết kế`, `chỉ định` các phương thức cho lớp con, nhưng chi tiết cài đặt sẽ do `lớp con triển khai`.

## SOLID là gì
- `S` (`Single` Responsibility Principle): mỗi lớp chỉ nên đảm nhận `một` `nhiệm vụ` cụ thể nào đó.

- `O` (`Open`/Closed Principle): `Không được sửa đổi` 1 class có sẵn, nhưng có thể `mở rộng` bằng kế thừa.

- `L` (`Liskov` Substituition Priciple): Thiết kế để các đối tượng `lớp con` có thể thay thế đối tượng `lớp cha` mà không gây ra lỗi.

    + ![alt](https://topdev.vn/blog/wp-content/uploads/2019/07/Liskov-substitution-principle.png)
    + Ở trường hợp trên `CleanerStaff` kế thừa `Employee` nhưng lại không được dùng method `checkAttendance()` do quy tắc thiết kế => `lỗi`
    + Có thể tách method `checkAttendance()` qua 1 class riêng.

- `I` (`Interface` Segregation Principle): Nên `chia nhỏ` thành nhiều interface thay vì thiết kế một interface lớn.

- `D` (`Dependency` Inversion Principle): 
    + Các module cấp cao không nên phụ thuộc vào các module cấp thấp mà `cả hai` nên phụ thuộc vào `abstraction`.
    + Các class giao tiếp với nhau thông qua `interface`, không phải `implementation`
    ---
    + ***Những cái trừu tượng (abstraction) là những cái ít biến động, tập hợp những đặc điểm chung nhất của những cái cụ thể. Việc phụ thuộc vào cái trừu tượng sẽ giúp chương trình linh động và thích ứng tốt với các sự thay đổi diễn ra liên tục.***
    + ***`Điểm khác biệt` giữa phụ thuộc vào `interface` và phụ thuộc `trực tiếp` là interface giúp chỉ cần quan tâm đến `hành vi chung`, `không` cần quan tâm đến `chi tiết` thực thi của dịch vụ. Như vậy việc sửa đổi mã nguồn sẽ độc lập và dễ bảo trì hơn.***
    ---
    + Ví dụ có 1 module cấp cao là `OrderProcessor` và module cấp thấp là `EmailService`
    + `Vi phạm nguyên tắc`: Implement thẳng EmailService vào OrderProcessor.
    + `Tuân theo nguyên tắc`: 
        + Tạo 1 interface `INotificationService` và `EmailService` sẽ kế thừa interface này. `OrderProcessor` chỉ việc inject interface này vào và sử dụng `EmailService`. 
        + Như vậy khi ta muốn thêm 1 service nào mới (như `SmsService`) thì ta chỉ việc kế thừa từ `INotificationService`, hạn chế thay đổi mã nguồn nhiều nơi.

