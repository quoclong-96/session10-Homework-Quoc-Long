const arr = [1, 7, 6, 3, 2, 1, 1, 5, 6, 7];

// Yêu cầu người dùng nhập vào một số bất kỳ
const inputSum = parseInt(prompt("Nhập vào một số bất kỳ:"));

let found = false; // Biến kiểm tra xem có mảng con thỏa mãn hay không
let subArray = []; // Mảng con thỏa mãn

// Duyệt qua từng phần tử trong mảng ban đầu để tìm mảng con có tổng bằng số vừa nhập
for (let i = 0; i < arr.length; i++) {
    let currentSum = 0; // Tổng của mảng con từ phần tử hiện tại
    subArray = []; // Reset mảng con

    // Duyệt qua từng phần tử từ phần tử hiện tại để tạo mảng con
    for (let j = i; j < arr.length; j++) {
        currentSum += arr[j]; // Cộng dồn phần tử vào tổng
        subArray.push(arr[j]); // Thêm phần tử vào mảng con

        // Nếu tổng của mảng con bằng số vừa nhập, in mảng con và đặt biến found thành true
        if (currentSum === inputSum) {
            console.log("Mảng con thỏa mãn có tổng bằng " + inputSum + ":");
            console.log(subArray);
            found = true;
            break;
        }
    }

    // Nếu đã tìm thấy mảng con thỏa mãn, thoát khỏi vòng lặp
    if (found) {
        break;
    }
}

// Nếu không tìm thấy mảng con
if (!found) {
    console.log("Không có mảng con thỏa mãn.");
}
