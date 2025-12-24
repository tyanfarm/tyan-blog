---
sidebar_position: 1
title: Normalization
---

- _Normalization (Chuẩn hóa)_ là kỹ thuật tiền xử lý dữ liệu nhằm đưa các _đặc trưng (features)_ về cùng một _THANG ĐO CHUNG (common scale)_, giúp loại bỏ sự chênh lệch về đơn vị và độ lớn giữa các biến.

## Min-Max Normalization
- Khi nhắc đến _Normalization_ chung chung thường đề cập đến cái này.

- Cho vector ban đầu $\boldsymbol{x} = [x_1, x_2, \dots, x_n]$. Vector được chuẩn hóa $x'$ được tính bằng cách trừ đi giá trị nhỏ nhất, sau đó chia cho _hiệu giữa giá trị lớn nhất và nhỏ nhất (range)_. Kết quả thường nằm trong khoảng $[0, 1]$.

$$x'_i = \frac{x_i - \min(\boldsymbol{x})}{\max(\boldsymbol{x}) - \min(\boldsymbol{x})}$$

## Standardization (Z-score Normalization)
- Cho vector ban đầu $\boldsymbol{x} = [x_1, x_2, \dots, x_n]$. Vector được chuẩn hóa $x'$ được tính bằng cách trừ đi _giá trị trung bình ($\mu$)_ và chia cho _độ lệch chuẩn ($\sigma$)_. Kết quả sẽ có phân phối với $\mu = 0$ và $\sigma = 1$.

$$x'_i = \frac{x_i - \mu}{\sigma}$$

## Vector Normalization
### L1 Normalization (Chuẩn hóa L1)
- Cho vector ban đầu $\boldsymbol{x} = [x_1, x_2, \dots, x_n]$. Vector được chuẩn hóa $x'$ được tính bằng cách chia từng phần tử cho [L1 Norm](./norm.md).

$$ x'_i = \frac{x_i}{\| \boldsymbol{x} \|_1} = \frac{x_i}{\sum_{j=1}^{n} |x_j|} $$

### L2 Normalization (Chuẩn hóa L2)
- Tương tự L1 Normalization, lấy vector gốc chia cho [L2 Norm](./norm.md).

$$ x'_i = \frac{x_i}{\| \boldsymbol{x} \|_2} = \frac{x_i}{\sqrt{\sum_{j=1}^{n} x_j^2}} $$
