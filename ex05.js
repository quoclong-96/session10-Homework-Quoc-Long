const arr = ["sun", 2, "moon", 4, "earth"];

// Đảo ngược thứ tự của các phần tử trong mảng
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

// In ra mảng đã đảo ngược lên màn hình console
console.log("Mảng sau khi đảo ngược thứ tự:");
console.log(arr);

//Solution 2
// const arr = ["sun", 2, "moon", 4, "earth"];

// // Sử dụng reverse() để đảo ngược thứ tự của các phần tử trong mảng
// const reversedArr = arr.reverse();

// // In ra mảng đã đảo ngược lên màn hình console
// console.log("Mảng sau khi đảo ngược thứ tự:");
// console.log(reversedArr);
