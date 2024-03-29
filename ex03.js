// Mảng số nguyên gồm nhiều phần tử
const arr = [1, 2, 5, 4, 8, 2, 3, 8, 4, 5, 2];

// Yêu cầu người dùng nhập vào một số nguyên bất kỳ
const userInput = parseInt(prompt("Nhập vào một số nguyên bất kỳ:"));

// Biến đếm số lần xuất hiện của số đó trong mảng
let count = 0;

// Duyệt qua mảng để đếm số lần xuất hiện của số đó
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === userInput) {
        count++;
    }
}

// In ra số lần xuất hiện của số đó lên màn hình console
console.log(`Số ${userInput} xuất hiện ${count} lần trong mảng.`);
