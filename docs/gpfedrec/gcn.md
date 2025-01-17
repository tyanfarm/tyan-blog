---
sidebar_position: 1
title: GCN
---

# Graph Convolutional Network

---

## GCN
- Graph Convolutional Network - mạng tích chập đồ thị. 

- Cách hoạt động của GCN:
    + Truyền thông tin giữa các nút:
        + Mỗi nút trong đồ thị cập nhật biểu diễn của mình bằng nhiều cách tùy bài toán (avg, sum, max, weighted, ...) thông tin từ các nút lân cận.
        
        + Việc này đảm bảo rằng thông tin cục bộ của nút (và mối quan hệ giữa các nút) được tích hợp. 

    + Biểu diễn nút (Node Embedding):
        + GCN học một biểu diễn vector cho mỗi nút, gọi là `embedding`, chứa thông tin quan trọng từ cả nút và các nút lân cận.

    + Lan truyền qua các lớp:
        + Một GCN có thể có nhiều lớp. Mỗi lớp áp dụng một phép tích chập trên đồ thị, dần dần tích hợp thông tin từ các nút lân cận xa hơn.

    + Áp dụng hàm kích hoạt:
        + Hàm kích hoạt giúp mô hình học các mối quan hệ phi tuyến tính giữa các nút trong đồ thị.
        
        + Sau mỗi bước tích chập, các biểu diễn vector thường được đưa qua một hàm kích hoạt phi tuyến, chẳng hạn như ReLU.

