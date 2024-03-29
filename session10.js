// // console.log("Hello world");

// // //solution : Array
// // let foodMenu = ["Bia hoi", "thit ga", "dau luot van", "lac luoc", "nem nam"];
// // // //Element:        el           el            el            el         el
// // // //Index:          0             1             2             3         4
// // // //Length:                                                              5
// // // let length = foodMenu.length;
// // // console.log(length);

// // // let students = ["Peter", "Tony", "Robert"];
// // // console.log(students.length);

// // // let todoList = ["wake up at 6am", "Sleep at 11pm"];
// // // let randomNumberList = [1, 3, 10, -2, 10];

// // //1. Read - Doc
// // // Read one (Lay ra 1 phan tu bat ky)
// // //First element （Lay ra phan tu dau tien)
// // foodMenu[0]; //Bia hoi

// // //Last element (lay ra phan tu cuoi cung)
// // foodMenu[4]; //nem nam
// // foodMenu[foodMenu.length - 1]; //nem nam

// // console.log("Luc uong 10 coc" + foodMenu[0]);
// // console.log(foodMenu[0]);

// // // Read all (Lay ra toan bo phan tu)
// // //Duyet qua mang
// // for (let i = 0; i <= foodMenu.length - 1; i++) {
// //     console.log("Vua order ", foodMenu[i]);
// // }

// // //Tim ra chi so index cua 1 phan tu bat ky
// // // console.log(foodMenu.indexOf("Tieu ho"));

// // //Create

// // //Them phan tu vao dau - unshift()
// // //Them phan tu vao cuoi - push()
// // //Them vao vi tri bat ky - splice()

// // console.log("danh sach mon an hien tai"):
// // console.log(foodMenu);
// // //Them vao dau
// // foodMenu.unshift("Bo xao mang truc");
// // console.log("danh sach mon an sau khi duoc them vao dau"):
// // console.log(foodMenu);

// // //Them vao cuoi
// // foodMenu.push("rau muong + top mo");
// // console.log("Dannh sach mon an sau khi duoc them vao cuoi");
// // console.log(foodMenu);

// // //Them vao vi tri bat ky
// // //.splice(index, 0, newEl);
// // foodMenu.splice(1, 0, "che hat sen");
// // console.log("Danh sach mon an sau khi duoc them vao vi tri index");
// // console.log(foodMenu);

// // //Update
// // foodMenu[7] = "Rong xanh vuot dai duong";
// // console.log("Danh sach mon an sau khi duoc cap nhat");
// // console.log(foodMenu);

// // //Delete
// // //Xoa 1 phan tu o cuoi mang - pop()
// // //Xoa 1 phan tu o dau mang -
// // //Xoa 1 phan tu o vi tri bat ky -

// // //Xoa phan tu cuoi cung
// // foodMenu.pop();
// // console.log("Danh sac mon an sau khi duoc xoa phan tu cuoi cung");
// // console.log(foodMenu);

// // //Xoa phan tu dau tien trong mang
// // foodMenu.shift();
// // console.log("Danh sach cac mon an sau khi duoc xoa phan tu dau mang");
// // console.log(foodMenu);

// // //Xoa phan tu bat ky
// // foodMenu.splice(2, 1); //Tai vi tri index xoa bao nhieu phan tu
// // console.log("Danh sach cac mon an sau khi xoa phan thit ga ");
// // console.log(foodMenu);

// // Exercise
// // Cho 1 danh sách todoList như sau

// const todoList = ["Sleep at 12pm", "Workout 2hours per day", "Do homework"];

// // Viết 1 ứng dụng quản lý các todoList
// // Cho phép người dùng nhập vào 4 chữ cái C/R/U/D thông qua
// // câu lệnh prompt

// // - C: Khi người dùng nhập vào chữ C
// // - Hiển thị lên 1 ô prompt cho phép người dùng thêm mới 1
// //   todo item vào trong danh sách todoList
// // - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
// //   todo item theo dạng:
// // - 1. Sleep at 12pm
// // - 2. Workout 2hours per day
// // - 3. ...

// // - R: Khi người dùng nhập vào chữ R
// // - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
// //   todo item theo dạng:
// // - 1. Sleep at 12pm
// // - 2. Workout 2hours per day
// // - 3. ...

// // - U: Khi người dùng nhập vào chữ U
// // - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
// //   muốn cập nhật
// // - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// // - Nếu hợp lệ -> Tiếp tục hiển thị ô prompt để nhập vào nội dung mới
// //   cập nhật cho todo item
// // - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// // - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
// //   todo item theo dạng:
// // - 1. Sleep at 12pm
// // - 2. Workout 2hours per day
// // - 3. ...

// // - D: Khi người dùng nhập vào chữ D
// // - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
// //   muốn xoá
// // - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// // - Nếu hợp lệ -> Tiến hành xoá todo item đó ra khỏi todoList
// // - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// // - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
// //   todo item theo dạng:
// // - 1. Sleep at 12pm
// // - 2. Workout 2hours per day
// // - 3. ...

// // - Chương trình lặp đi lại lại vô hạn
// // cho đến khi người dùng nhập vào chữ "E

// let userInput = prompt("Moi ban nhap vao 4 chu cai C/R/U/D");

// if (userInput === "C") {
//     let create = prompt("Moi ban them Brush the teeth vao danh sach todoList");
//     todoList.push("Brush the teeth");
//     console.log("Danh sach todo list sau khi duoc them vao"):
//     console.log(todoList);

// } else if (userInput === "R") {
//     for (let i = 0; i <= todoList.length - 1; i++) {
//         console.log("Danh sach  to do List ", todoList[i]);
//     }
// } else if (userInput === "U") {
//     let update = parseInt(prompt("Vi tri muon nhap vao "));
//     if (update <= todoList.length) {
//         let update = ("Nhap vao Sing a song vao todo list")
//     } else {
//       let userInput = prompt("Moi ban nhap vao 4 chu cai C/R/U/D");
//     }
//     for (let i = 0; i <= todoList.length - 1; i++) {
//       console.log("Danh sach  to do List ", todoList[i]);
//   }
// } else if (userInput === "D") {

// } else {

// }

const todoList = ["Sleep at 12pm", "Workout 2hours per day", "Do homework"];

let userInput;
do {
    userInput = prompt(
        "Nhập vào C/R/U/D để thực hiện thao tác hoặc E để thoát:"
    );
    if (userInput !== null) {
        userInput = userInput.toUpperCase();
        if (userInput === "C") {
            const newItem = prompt("Nhập todo item mới:");
            if (newItem !== null && newItem !== "") {
                todoList.push(newItem);
            }
        } else if (userInput === "R") {
            console.log("Todo List:");
            todoList.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        } else if (userInput === "U") {
            const indexToUpdate =
                parseInt(prompt("Nhập vị trí của todo item muốn cập nhật:")) -
                1;
            if (indexToUpdate >= 0 && indexToUpdate < todoList.length) {
                const updatedItem = prompt("Nhập nội dung mới:");
                if (updatedItem !== null && updatedItem !== "") {
                    todoList[indexToUpdate] = updatedItem;
                }
            } else {
                console.log("Vị trí không hợp lệ.");
            }
        } else if (userInput === "D") {
            const indexToDelete =
                parseInt(prompt("Nhập vị trí của todo item muốn xoá:")) - 1;
            if (indexToDelete >= 0 && indexToDelete < todoList.length) {
                todoList.splice(indexToDelete, 1);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
        } else if (userInput === "E") {
            console.log("Kết thúc chương trình.");
        } else {
            console.log("Lựa chọn không hợp lệ.");
        }
    }
} while (userInput !== "E");
