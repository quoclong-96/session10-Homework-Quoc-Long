const a = parseInt(prompt("Nhập vào số nguyên dương a:"));
const b = parseInt(prompt("Nhập vào số nguyên dương b:"));

// Khai báo mảng để lưu các số chia hết cho b hoặc chia hết cho a
const array = [];

// Kiểm tra và lưu các số chia hết cho b trong khoảng từ 1 đến a
for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
        array.push(i);
    }
}

// Kiểm tra và lưu các số chia hết cho a trong khoảng từ 1 đến b
for (let i = 1; i <= b; i++) {
    if (i % a === 0) {
        array.push(i);
    }
}

// In mảng các số chia hết vào console
console.log("Các số chia hết cho a hoặc b:");
console.log(array);
