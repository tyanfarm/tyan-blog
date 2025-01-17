---
sidebar_position: 2
title: LightGCN
---

# Light Graph Convolutional Network

---

## Abstract
- Hai phương pháp phổ biến nhất của GCN - `biến đổi đặc trưng (feature transformation)` & `kích hoạt phi tuyến (nonlinear activation)` - đóng góp rất ít vào hiệu suất của lọc cộng tác.

- Bài báo đề xuất phương pháp `LightGCN`, chỉ bao gồm thành phần thiết yếu nhất trong GCN là `tổng hợp lân cận (neighborhood aggregation)` cho lọc cộng tác và bỏ qua 2 thành phần chính ở trên của GCN.

- Cụ thể, LightGCN học các embedding của user và item bằng cách lan truyền chúng một cách tuyến tính trên đồ thị tương tác user-item, và sử dụng tổng trọng số của các embedding học được ở tất cả các lớp làm embedding cuối cùng.

- Trung bình khoảng 16,0% cải thiện tương đối so với `Neural Graph Collaborative Filtering (NGCF)` - một mô hình dựa trên GCN.

## Introduction