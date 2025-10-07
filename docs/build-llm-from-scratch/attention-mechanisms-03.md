---
sidebar_position: 5
title: 3. Coding Attention Mechanisms (Part 03)
---

## Cơ chế self-attention đơn giản có trainable weights
- Điểm khác biệt quan trọng nhất ở phần này so với phần trước là việc `các trainable weights matrices` sẽ _được cập nhật trong quá trình huấn luyện._

- Ta sẽ triển khai qua 2 bước:
    + __Bước 1:__ Viết code chi tiết từng bước (giống phần _no weights_)

    + __Bước 2:__ Gom thành 1 class Python để import vào LLM architecture (sẽ triển khai ở các phần sau)

