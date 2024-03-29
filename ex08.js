// Khai báo mảng số nguyên bất kỳ
const arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// Lưu trữ các phần tử xuất hiện từ hai lần trở lên
const duplicates = {};

// Duyệt qua từng phần tử trong mảng và đếm số lần xuất hiện của mỗi phần tử
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    // Nếu chưa tồn tại trong đối tượng duplicates, khởi tạo số lần xuất hiện là 1
    if (!duplicates[num]) {
        duplicates[num] = 1;
    } else {
        // Nếu đã tồn tại, tăng số lần xuất hiện lên
        duplicates[num]++;
    }
}

// In ra các phần tử xuất hiện từ hai lần trở lên
for (const num in duplicates) {
    if (duplicates[num] >= 2) {
        console.log(`Phần tử ${num} xuất hiện từ hai lần trở lên.`);
    }
}

// const person = {
//     name: "John",
//     age: 30,
//     gender: "male",
// };

// for (const key in person) {
//     // console.log(key); // In ra tên của từng thuộc tính
//     console.log(person[key]); // In ra giá trị của từng thuộc tính
// }
