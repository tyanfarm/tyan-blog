---
sidebar_position: 3
title: Norm
---

- Trong đại số tuyến tính, _Norm_ có nghĩa là tổng độ dài của tất cả vectors trong không gian đó.

## 1. L1 Norm
- Còn có tên khác là `Manhattan Distance`, có công thức như sau:

$$ \| \boldsymbol{x} \|_1 = \sum_{i=1}^{n} | x_i | = | x_1 | + | x_2 | + \dots + | x_n | $$

- Với _vector_ $x$ có $n$ phần tử: $x = [x_1, x_2, ..., x_n]$. 

- Chú ý 1 chút về kí hiệu, $|x|$ là trị tuyệt đối của $x$, còn $\| \boldsymbol{x} \|_1$ là _L1 Norm_ của $x$.

## L2 Norm
- Là _Norm_ phổ biến nhất, hay còn biết tới là _Euclidean norm_, có công thức như sau:

$$ \| \boldsymbol{x} \|_2 = \sqrt{\sum_{i=1}^{n} x_i^2} = \sqrt{x_1^2 + x_2^2 + \dots + x_n^2} $$

## L1 Norm (manhattan distance) & L2 Norm (euclide distance)

- ![alt](../imgs/euclidean&manhattan.png)