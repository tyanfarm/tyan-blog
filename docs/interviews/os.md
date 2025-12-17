---
sidebar_position: 4
---

# OS

---

## Phân biệt Sequential, Concurrency & Parallelism 
#### Sequential (Tuần tự)
- 1 người xử lí tuần tự từng task, xong task này mới xử lí task tiếp theo. 

- ![alt](./imgs/sequential.webp)

#### Concurrency (Đồng thời)
- Một người luân phiên xử lý nhiều task, tại 1 thời điểm chỉ xử lí 1 task.

- ![alt](./imgs/concurrent.webp)

#### Parallelism (Song song)
- Mỗi người đảm nhận 1 task riêng biệt.

- ![alt](./imgs/parallel.webp)

## Phân biệt Thread & Process
- ![alt](./imgs/process&thread.jpg)

- Một `process` là 1 instance thực thi của ứng dụng. Ví dụ khi bạn click vào Microsoft Excel, bạn đã khởi động 1 process để chạy Excel.

- Một `thread` là 1 đơn vị thực thi trong _process_. Hiểu đơn giản là 1 _process_ có thể chứa nhiều _thread_, một _thread_ có thể làm bất kì thứ gì mà một _process_ có thể làm. 

- Trong `cùng 1 process` thì các `thread` có thể _chia sẻ tài nguyên (địa chỉ bộ nhớ)_ còn các `process khác nhau` thì không. Do đó các _threads_ có thể đọc và ghi các cấu trúc dữ liệu, các biến giống nhau và cũng giao tiếp với nhau dễ dàng.

- Khi khởi động _process_, nó yêu cầu OS cấp cho 1 bộ nhớ RAM nhất định. Sau đó nếu _process_ có _1 thread_, OS ném _thread_ này vào _core 1_ CPU. Nếu _process_ có _4 threads_ thì OS sẽ dùng _4 core_ CPU cho các threads này. Tuy nhiên, lưu ý rằng _1 core CPU_ không thể chạy _parallel_ mà chạy _concurrent_. Vì vậy nếu OS chỉ có _2 core CPU_ và có tận _4 threads_ đang được yêu cầu xử lí, OS sẽ kết hợp cả _parallel_ & _concurrent_ vì tại 1 thời điểm chỉ có _2 threads_ được xử lí cùng lúc bởi CPU. 

- Tuy nhiên lí thuyết trên chỉ đúng với `C++, Java, Rust, Go,...`, còn với `Python` thì không. _Python_ có cơ chế `GIL (Global Interpreter Lock)`, có nghĩa là tại 1 thời điểm chỉ 1 _thread_ được điều khiển _Interpreter_. Như vậy có thể thấy rằng `multi-threading` trong _Python_ không phải _parallel_ mà là _concurrent_. Để sử dụng được `multi-core`, cần phải sử dụng `multi-processing` thay vì `multi-threading`. Module này tạo ra các _process_, mỗi _process_ có _1 Interpreter và 1 bộ nhớ riêng_, do đó mỗi _process_ có 1 _GIL_ riêng của nó. 