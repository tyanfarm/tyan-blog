---
sidebar_position: 1
title: C#
---

# C# 

---

## Object & Class
| Object | Class |
|:----------------|:---------------|
| Là thực thể được tạo ra từ Class | Là bản thiết kế, xác định thuộc tính và phương thức |

## Struct & Class
- Giống nhau:
    + Đều chứa `property` & `field`

|   | Struct | Class |
|:--|:----------------|:---------------|
|Lưu trữ|Ngăn xếp `Stack`|Bộ nhớ `Heap`|
|Kiểu dữ liệu|`Value type`|`Reference type`|
|Kế thừa| Không hỗ trợ | Hỗ trợ |
|Constructor không tham số| Không hỗ trợ | Hỗ trợ |

## Property & Field
- `Field (trường dữ liệu)`: là biến để lưu dữ liệu trong Struct và Class, có các quyền truy cập (public, protected, private, ...).

    + ```
        private string _name;
- `Property (Thuộc tính)`: Cung cấp getter và setter để đọc ghi dữ liệu từ `Field` an toàn.
    + ```
        public string Name {
            get { return _name; }  
            set { _name = value; }  
        }

- Với `C#` thì đã có `auto-implemented properties` (thuộc tính tự động).
    + ```
        public string Name {get; set;}



## Abstract Class & Interface 
- `Abstract Class` vừa giống `Class` vừa giống `Interface`. Giống `Class` ở chỗ có thể khai báo `field, const`, có thể implement thân hàm, có thể hỗ trợ `kế thừa & đa hình` (bằng `virtual method`). Giống `Interface` ở chỗ có thể khai báo các `phương thức ảo` (`abstract method`) để lớp con triển khai, là 1 bản thiết kế.

- Giống nhau: 
    + Đều không thể khởi tạo trực tiếp mà phải được thực thi bởi các lớp con kế thừa.
    + Đều có thể khai báo phương thức nhưng không thực hiện.
    + Đều có thể kế thừa nhiều interface.
- Khác nhau:

| Abstract Class | Interface |
|:----------------|:---------------|
| Khai báo được const, property  | Không khai báo được const, property |
| Có constructor, destructor | Không có constructor, destructor |
| Được dùng từ khóa `abstract` hoặc `virtual` ở method | `Không` được dùng từ khóa `abstract` hoặc `virtual` ở method |
| Implement các `abstract method` phải dùng từ khóa `override` | Khi lớp con kế thừa không dùng `override` để implement |
| Các phương thức có thể có thân hàm với `method thường` và không có thân hàm với `abstract method`. Method có từ khóa `access modifier` | Bắt đầu từ C# 8.0 trở đi thì các method của `Interface` có thể có các từ khóa `access modifier` và `khai báo thân hàm` |


## Virtual method & Abstract method
| Abstract method | Virtual method |
|:----------------|:---------------|
| Không được phép cài đặt | Được phép cài đặt |
| Các lớp con `bắt buộc` phải override | Các lớp con `không` bắt buộc phải override |
| Method phải nằm trong Abstract Class | Có thể ở bất kì class nào |

## Override & Overload & Hiding
| Override | Overload | Hiding
|:----------------|:---------------|:---------------|
| Kĩ thuật ghi đè phương thức ở `lớp cha` khi muốn định nghĩa lại ở lớp con. | Kĩ thuật cho phép có nhiều phương thức `cùng tên` nhưng `khác số lượng, kiểu dữ liệu` `tham số đầu vào` và có thể có `quyền truy cập` khác nhau. | Phương thức ở lớp con cùng tên với phương thức ở lớp cha và không ghi đè bằng `override` |
| Phương thức ở lớp cha cần có từ khóa `virtual`, `abstract` hoặc `override` | Xảy ra trong cùng 1 `class`. | Phương thức ở lớp cha là `virtual` hoặc `method thường` (vì abstract method bắt buộc phải override). 

- Ví dụ 1 class cha `Dog` và class con `BullDog`. Xét trường hợp `method` đều có ở class cha và class con. (`Dog dog = new BullDog()`).
- Khi `override` thì method ở lớp con là method của chính nó, nếu đứng ở class cha và gọi phương thức `override` ở lớp con thì method ở lớp con sẽ được gọi.
- Nhưng với `hiding` thì nếu gọi phương thức ở class cha thì phương thức ở `class cha` sẽ được gọi.

## Static
- ***Static Class*** (Lớp tĩnh)
    + `Không` thể khởi tạo được đối tượng (object).
    + Các thành phần bên trong (phương thức, thuộc tính) `bắt buộc phải là static`.
    + Dùng chủ yếu cho các phương thức tiện ích hoặc các hàm xử lý mà không cần lưu trữ trạng thái thông qua đối tượng.

- ***Static Method*** (Hàm tĩnh)
    + Phương thức thuộc về lớp (không phải thuộc về đối tượng như `instance method`)
    + Có thể gọi thẳng hàm mà không cần khởi tạo đối tượng (trong cả `non-static class` và `static class`).
    + Không truy cập được các thuộc tính không tĩnh (instance) trong class.

