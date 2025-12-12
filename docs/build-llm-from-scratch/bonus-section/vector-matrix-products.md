---
sidebar_position: 4
title: Vector & Matrix Products
---

- Cho 2 vector:
``` 
import numpy as np
import torch

# Vector 3 phần tử (Shape: (3,))
a_np = np.array([1, 2, 3])
b_np = np.array([4, 5, 6])

a_pt = torch.tensor([1, 2, 3])
b_pt = torch.tensor([4, 5, 6])
```

## 1. Element-wise Product (Tích từng phần tử)
- _Nhân từng phần tử ở vị trí tương ứng nhau_

- Kí hiệu: $\mathbf{a} \odot \mathbf{b}$

- Input: 2 vector / ma trận cùng kích thước.

- Output: vector / ma trận cùng kích thước input.

- Công thức: $c_i = a_i \times b_i$

```
# --- Python Syntax ---

# NumPy
res = a_np * b_np 

# PyTorch
res = a_pt * b_pt

# Kết quả: [4, 10, 18] -> Shape (3,)
```

## 2. Dot Product (Tích vô hướng)
- _Tính tổng của tích từng phần tử_

- Kí hiệu: $\mathbf{a} \cdot \mathbf{b}$ hoặc $\mathbf{a}^T\mathbf{b}$ 

    + Quy ước trong _đại số tuyến tính_, khi nhắc đến vector mà không nói gì thêm, mặc định nó là `vector cột`. Do vậy _dot product_ ở trên sẽ là _transpose_ $a \cdot b$ (1x3) x (3x1).

- Input: 2 vector cùng chiều dài.

- Output: 1 con số (scalar)

- Công thức: $c = \sum (a_i \times b_i)$

```
# --- Python Syntax ---

# NumPy
res = a_np @ b_np       
# Hoặc: np.dot(a_np, b_np)

# PyTorch
res = a_pt @ b_pt       
# Hoặc: torch.dot(a_pt, b_pt)

# Kết quả: 32 (1*4 + 2*5 + 3*6) -> Shape ()
```

## 3. Outer Product
- _Phép nhân tạo ma trận từ 2 vector_

- Kí hiệu: $\mathbf{a} \otimes \mathbf{b}$ hoặc $\mathbf{a}\mathbf{b}^T$

- Input: 2 vector (có thể khác chiều dài), ví dụ có chiều (n x 1) & (m x 1).

- Output: 1 ma trận có kích thước (n x m). 

- Công thức: $C_{ij} = a_i \times b_j$

```
# --- Python Syntax ---

# NumPy
res = np.outer(a_np, b_np)

# PyTorch
res = torch.outer(a_pt, b_pt)

# Kết quả:
# [[ 4  5  6]
#  [ 8 10 12]
#  [12 15 18]] 
# -> Shape (3, 3)
```

## Cross Product (Tích có hướng)
- Phép nhân tạo ra vector vuông góc với 2 vector ban đầu (ít dùng trong Machine Learning).

- Kí hiệu: $\mathbf{a} \times \mathbf{b}$

- Input: 2 vector trong không gian 3D.

- Output: 1 vector vuông góc.

```
# --- Python Syntax ---

# NumPy
res = np.cross(a_np, b_np)

# PyTorch (Lưu ý: Input phải là Float, không nhận Int)
res = torch.linalg.cross(a_pt.float(), b_pt.float())

# Kết quả: [-3, 6, -3] -> Shape (3,)
```
