// Khai báo mảng số nguyên gồm nhiều phần tử bất kỳ
const arr = [-3, 2, -5, 1, 6, -4];

// Khai báo mảng mới để lưu trữ kết quả
const resultArr = [];

// Di chuyển các phần tử âm lên đầu mảng, phần tử dương về cuối mảng
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        resultArr.unshift(arr[i]); // Di chuyển phần tử âm lên đầu mảng
    } else {
        resultArr.push(arr[i]); // Di chuyển phần tử dương về cuối mảng
    }
}

console.log("Kết quả là:");
console.log(resultArr);
