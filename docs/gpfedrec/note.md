---
sidebar_position: 100
title: Note
---

# Note

---
## Federated Recommendation (FR) & Distributed Machine Learning (DML)
- Lưu trữ dữ liệu:
	+ `DML`: Dữ liệu thường được lưu trữ tập trung & có thể truy cập chung tại 1 hệ thống
	+ `FR`: Dữ liệu được lưu trữ trên các thiết bị cục bộ.

- Cách phối hợp:
	+ `DML`: Các nodes phải phối hợp liên tục, đồng bộ. Mục tiêu để tăng tốc độ huấn luyện, xử lý dữ liệu lớn trong thời gian ngắn.
	+ `FR`: Thường không liên tục. Mục tiêu để bảo vệ quyền riêng tư, cá nhân hóa mô hình mà không tập trung dữ liệu.

## Torch Embedding
- `torch.nn.Embedding(num_embeddings, embedding_dim)`:
	+ `num_embeddings`: kích thước từ điển embedding, nếu num_embeddings=5 và muốn embed index=6 thì lỗi
	+ `embedding_dim`: số chiều của vecto output

## Range khi Embedding User & Item:
- `Phân phối chuẩn`: Mô tả cách các giá trị của một biến ngẫu nhiên được phân bố trong 1 tập dữ liệu.

- Trong PyTorch, `nn.Embedding` khởi tạo bảng Embedding bằng `phân phối chuẩn (Gaussian distribution)` với `trung bình (mean)` là 0 và `độ lệch chuẩn (standard deviation)` dựa trên kích thước của embedding.

- Cụ thể, độ lệch chuẩn được tính là:
    + $$ std = \frac{1}{\sqrt{embedding_dim}} $$

- Ví dụ với `embedding_dim=3` thì:
    + $$ std = \frac{1}{\sqrt{3}} \approx 0.577 $$

- Vì các giá trị được lấy từ phân phối chuẩn $N(0, 0.577)$ nên phần lớn các giá trị sẽ nằm trong khoảng từ $-3 \cdot std$ đến $+3 \cdot std$ $\approx [-1.731, 1.731]$ (theo quy tắc $3-sigma$ của phân phối chuẩn, bao phủ 99.7% dữ liệu).