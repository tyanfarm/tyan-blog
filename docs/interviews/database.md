---
sidebar_position: 3
---

# Database

---

## UUID là gì
- UUID (Universally Unique Identifier) - định danh duy nhất
- Kích thước 16 bytes - 32 kí tự

## Transaction Database - Giao dịch cơ sở dữ liệu là gì
- Là 1 chuỗi các thao tác tương tác với cơ sở dữ liệu.

- Tuân theo tính chất `ACID`:
    + `Tính nguyên tử` (`Atomicity`): Toàn bộ giao dịch được coi như `một khối duy nhất`. Hoặc là thành công hoặc là rollback.
    + `Tính nhất quán` (`Consistencty`): Sau bất kì transaction nào thì mối liên kết dữ liệu vẫn không thay đổi.
    + `Tính độc lập` (`Isolation`): Một giao dịch được thực thi không ảnh hưởng đến các giao dịch khác.  
    + `Tính bền vững` (`Durability`): Sau khi các giao dịch diễn ra thành công thì dữ liệu sẽ không bị mất dù gặp bất kì trục trặc gì.

- Quy trình xử lý giao dịch:
    + Bắt đầu giao dịch (BEGIN TRANSACTION).
    + Thực thi các thao tác như thêm, sửa, xóa dữ liệu.
    + Kiểm tra các điều kiện đảm bảo không vi phạm các ràng buộc dữ liệu.
    + `COMMIT` nếu thành công và `ROLLBACK` nếu có lỗi trong quá trình thực thi.

- Các trường hợp có thể xảy ra:
    + `Deadlock`: khi 2 hoặc nhiều giao dịch cùng giữ khóa mà các giao dịch khác cần và đều chờ nhau giải phóng khóa. Từ đó sẽ dẫn đến chờ vô hạn.
    + `Giao dịch đồng thời`: Khi nhiều giao dịch xảy ra đồng thời, cần có phương pháp kiểm soát. Tiêu biểu là `locking`.
    + `Giao dịch thất bại` 

## SQL và NoSQL khác gì nhau?
|   | SQL | NoSQL |
|:--|:----------------|:---------------|
| Kiến trúc dữ liệu | - Sử dụng mô hình dữ liệu quan hệ, được tổ chức trong bảng với các hàng và cột <br/> - Có các ràng buộc dữ liệu (PK, FK, NOT NULL, UNIQUE, ...) <br/> - Có thể quan hệ giữa các bảng với khóa ngoại (Foreign Key)<br/> | - Hỗ trợ nhiều mô hình dữ liệu khác nhau: <br/>&nbsp;&nbsp; + Tài liệu (Document): MongoDB <br/> &nbsp;&nbsp; + Các cặp key-value: Redis <br/>&nbsp;&nbsp; + Column: Cassandra <br/> - Cho phép lưu dữ liệu mà không cần xác định trước cấu trúc |

## Đánh index là gì? Khi nào đánh khi nào không?
- `Đánh index` là đánh chỉ mục trên một hoặc nhiều cột nào đó giúp tăng tốc độ truy vấn mà không cần quét toàn bộ bảng

- Khi nào nên đánh index:
    + Khi bảng dữ liệu có nhiều bản ghi và thường xuyên truy vấn `SELECT`
    + Truy vấn trên cột thường xuyên sử dụng trong điều kiện lọc
    + Các nhóm cột thường xuyên sử dụng hàm nhóm (COUNT, AVG, SUM)

- Khi nào không nên đánh index:
    + Với `bảng nhỏ` (dưới 1000 bản ghi) vì thời gian quét toàn bộ bảng thường không tốn thời gian.
    + Với các bảng thường xuyên thay đổi (INSERT, UPDATE, DELETE) vì bảng sẽ cần cập nhật lại index.
    + Chỉ mục sẽ chiếm không gian lưu trữ.

## Shard & View
- `Shard`: Sharding là kĩ thuật phân mảnh dữ liệu để lưu trữ trên nhiều máy chủ khác nhau để tăng khả năng mở rộng và hiệu suất của CSDL.

![alt](https://images.viblo.asia/c3f91483-4ac3-4a18-a7b4-c604f059e64c.png)

- `View`: Là bảng ảo trong CSDL, không lưu dữ liệu. Thay vì JOIN 2 bảng với nhau trên mỗi lần truy vấn thì ta có thể dùng `VIEW` để thay thế, rút ngắn câu lệnh.

![alt](https://winzone.vn/images/blog/13/view_example.png)

## Event Store là gì? Các loại Event Store?
***Event Store là gì***
- `Event Store`: là 1 loại cơ sở dữ liệu lưu trữ dữ liệu theo sự kiện (event). 
- `Event Sourcing`: Kỹ thuật lưu trạng thái của dữ liệu `trên sự kiện`. Thay vì lưu trạng thái hiện tại của dữ liệu, nó lưu trữ toàn bộ lịch sử các sự kiện xảy ra. 

***Các loại EventStore phổ biến***
- `EventStoreDB`
- `ApacheKafka`
- `RDM` hay `NoSQL DB` đều có thể sử dụng như 1 EventStore bằng cách lưu các sự kiện trong bảng. 

## Cache là gì? Cache bằng công cụ nào?
***Cache là gì***
- Cache lưu trữ bản sao của dữ liệu để tránh việc truy cập dữ liệu gốc nhiều lần, đặc biệt với những dữ liệu tĩnh và ít thay đổi thường xuyên.

- Các loại cache:
    + Client-side Cache
    + Server-side Cache
    + Distributed Cache

- Các thành phần của cache:
    + Key 
    + Value
    + TTL (Time To Live)

***Dùng gì để cache***
| Công nghệ | Công cụ |
|:----------------|:---------------|
| Memory-based caching | Redis |
| Application-level cache | + ASPNET Cache: `MemoryCache` & `OutputCache` <br/> + Spring Cache (Java)
| HTTP Caching | Browser Cache |
| Database Caching | `MySQL` hoặc `PostgreSQL` |

