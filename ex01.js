// Khai báo mảng với các phần tử bất kỳ
const arr = [1, "a", 2, "b", 3, "c"];

// Biến cờ để kiểm tra xem có số nguyên nào trong mảng hay không
let hasInteger = false;

// Duyệt qua mảng và in ra các số nguyên
for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        console.log(arr[i]);
        hasInteger = true;
    }
}

// Nếu không có số nguyên nào, hiển thị thông báo tương ứng
if (!hasInteger) {
    console.log("Trong mảng không tồn tại số nguyên");
}
