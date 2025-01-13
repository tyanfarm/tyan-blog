---
sidebar_position: 5
---

# Web

---

## Session & Cookies
| Session | Cookies |
|:----------------|:---------------|
| Lưu dữ liệu trên server | Lưu dữ liệu ở phía client |
| Bị xóa khi `timeout` hoặc xóa thủ công | `session cookies` bị xóa khi đóng trình duyệt, `persistent cookies` được cài đặt thời gian sống và tồn tại đến khi timeout |

- `Session ID` được gửi kèm trong mỗi request đến server, được lưu dưới dạng `session cookies` trên trình duyệt (thường chỉ tồn tại trong phiên làm việc của trình duyệt).

## Local Storage & Session Storage
- Đều lưu trữ phía `client` trong trình duyệt web

| | Local Storage | Session Storage |
|:---|:----------------|:---------------|
| `Phạm vi lưu trữ` | Được chia sẻ giữa các tab và cửa sổ trình duyệt của cùng 1 trang web | Mỗi tab hoặc cửa sổ trình duyệt sẽ có 1 session storage riêng biệt |
| `Thời gian sống` | Tồn tại vĩnh viễn cho đến khi được xóa thủ công bằng code hoặc từ người dùng xóa ở trình duyệt | Bị xóa khi tab hoặc cửa sổ trình duyệt đóng |

## Quản lý phiên làm việc ở server
- `Sử dụng session`: Mỗi khi người dùng đăng nhập sẽ có 1 `Session ID` đặt trong `session cookies`. Người dùng sẽ gắn cookies này trong request để lấy dữ liệu từ server. Server sẽ kiểm tra xem `Session ID` trong request có trùng với `Session ID` được lưu ở Server hay không.

- `Sử dụng JWT Token`: Mỗi khi người dùng đăng nhập sẽ được cấp 1 `Access Token`. Người dùng sẽ gắn token này trong `headers` của request và server sẽ kiểm tra token, nếu hợp lệ sẽ cho sử dụng các dịch vụ ở server. 
