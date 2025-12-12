---
sidebar_position: 1
title: Normalization
---

- Normalization (chuẩn hóa) là 1 kĩ thuật tiền xử lí dữ liệu để điều chỉnh phạm vi của các đặc trưng về 1 khoảng cụ thể, thường là khoảng [0, 1]

## L1 Normalization (Chuẩn hóa L1)
- Cho vector ban đầu $\boldsymbol{x} = [x_1, x_2, \dots, x_n]$. Vector được chuẩn hóa $x'$ được tính bằng cách chia từng phần tử cho [L1 Norm](./norm.md).

$$ x'_i = \frac{x_i}{\| \boldsymbol{x} \|_1} = \frac{x_i}{\sum_{j=1}^{n} |x_j|} $$

## L2 Normalization (Chuẩn hóa L2)
- Tương tự L1 Normalization, lấy vector gốc chia cho [L2 Norm](./norm.md).

$$ x'_i = \frac{x_i}{\| \boldsymbol{x} \|_2} = \frac{x_i}{\sqrt{\sum_{j=1}^{n} x_j^2}} $$
