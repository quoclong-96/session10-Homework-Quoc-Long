// Mảng có sẵn
const arr = [10, "bread", 30, "apple", 50];

// Yêu cầu người dùng nhập giá trị
const userInput = prompt("Nhập vào giá trị cần tìm trong mảng:");

// Biến để kiểm tra xem phần tử có tồn tại trong mảng hay không
let found = false;

// Duyệt qua mảng để tìm kiếm phần tử
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == userInput) {
        console.log(`Phần tử ${userInput} được tìm thấy tại vị trí ${i}`);
        found = true;
        break;
    }
}

// Kiểm tra nếu không tìm thấy phần tử
if (!found) {
    console.log("Phần tử không tồn tại trong mảng");
}
