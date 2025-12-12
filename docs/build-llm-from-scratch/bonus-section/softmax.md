---
sidebar_position: 3
title: Softmax
---

- Cho vector đầu vào $x = [x_1, x_2, ..., x_n]$. _Softmax_ cho phần tử _thứ i_ có công thức sau:
$$ Softmax(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}} $$

- Softmax cũng là 1 hàm để chuẩn hóa vector. Nó khác [L1 Normalization](./normalization.md) ở điểm là _L1_ đưa các phần tử theo `tỉ lệ tuyến tính` về khoảng [0, 1], còn _Softmax_ khuếch đại sự chênh lệch nhỏ thành lớn về xác suất. Ví dụ:
    
    + Cho 1 vector `[2, 4]`.
    
    + _L1 Normalization_ ra kết quả `[0.33, 0.67]`, vẫn là tỉ lệ gấp đôi.

    + _Softmax_ ra kết quả `[0.12, 0.88]`, khiến `4` có tỉ lệ lớn hơn hẳn `2`, giúp mô hình hội tụ nhanh hơn vào đáp án đúng.

    + Có 1 điểm nữa là _xử lí số âm_. Với hàm mũ $e^x$, _softmax_ biến số âm thành xác suất rất nhỏ, không như _L1_ sẽ ra kết quả là số âm luôn (sai bản chất xác suất).