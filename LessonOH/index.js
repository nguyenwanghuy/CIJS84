// - Arrow function
// const/let/var tenfuncion = (prameter1, param2,...paramN) => {

// }
// Viết 1 hàm tính tổng bằng cách sử dụng arrow function input: 2,6 , output *
const sum = (a,b) => {
    return a+b;
}
console.log(sum(2,6))
// chỉ có 1 code thực thi thì có thể xoá dấu {} và chữ return
// arrow funcion không có hoisting
// không có context

// viết 1 hàm tính bình phương của 1 số n
const tinhBinhPhuong = (n) => n ** 2;
console.log(tinhBinhPhuong(6))

// -Template literal sử dụng dấu ``

const  maLop = 'CIJ';
const diaChi = 'thành công'
// const str = "MindX" + maLop +'\nHọc ở' + diaChi ;
const str = `MindX ${maLop}
Học ở ${diaChi}`;
console.log(str)
//vd
const namee = 'Huy'
const bien = `Tên là ${namee}`
console.log(bien)

// -Spread & Rest Operator
// Một số ứng dụng với spread operator:

// - Sao chép array, object
const num1 = [1,2,3];
const num2 = [...num1]; // spread 
num2[2] = 33;
console.log(num1)
console.log(num2)
// - Gộp array, object
const nameAndAge = {name : " Nguyễn Văn A" , age:18};
const gpa = {gpa: '3.8'};
const student = {
    ...nameAndAge, // name : " Nguyễn Văn A" , age:18,gpa: '3.8'
    ...gpa,
};
console.log(student)

const student1 = {name : " Nguyễn Văn A" , age:18,gpa: '3.9'};
const student2 = {name: 'Đỗ Văn B', age:19};
// const student3 = {...student2,...student1}; 
// console.log(student3) // object sẽ bị đè
//còn array sẽ không bị đè
// - Thêm phần tử vào array, thêm key vào object.
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6, ...arr1, ...arr2];
console.log(arr3);
const student3 = { gpa: 3, ...student1, ...student2, gender: 'Boy' };

console.log(student3);
//spread
//tính tổng của các số truyền vào input 1,2,3

function sumTong (...params){ 
    let total =0;
    for(let i=0; i<params.length;i++){
        total+= params[i]
    }
    return total;
}
sumTong(1,2,3)




// -Destructuring

const teacher = {
    name: 'trần thị b ',
    gender: 'girl',
}
const {gender ,name: nameTeacher, age=0} = teacher;
console.log(nameTeacher)
//array
const listNumber = [1,2,3];
const [number0, number1] = listNumber; 
// -Array function: map, filter, findIndex, find...,forEach
//Cho 1 mảng A có các phần tử là số. Viết code trả về một mảng mới có giá trị là các phần tử trong mảng A * 2 input: A= [1,2,3], output: B; [2,4,6]
// function newArr(arr) {
//     let mang = [];
//     for(let i= 0;i<arr.length;i++) {
//         newVari = arr[i] * 2;
//         mang.push(newVari)
//     }
//     return mang;
// }
// console.log(newArr([1,2,3]))

const A = [1,2,3,5]
// Cách 1
// const A = [1,2,3,5]
// const newArr = [];
// for( let i=0; i<A.length;i++) {
//     newArr.push(A[i] *2)
// }
// console.log(newArr)
// Cách 2 dùng hàm map
// const newArr = A.map((value) => {
//  return value *2
// });
// console.log(newArr)

// Bài 2: Cho một mảng B, viết code trả về mảng mới chứa các
// phần tử là số lẻ trong mảng B
// Input: B = [1,2,3,4,5]
// Output: newArr = [1,3,5]
const B =[1,2,3,4,5] 

// const newArr1 = [];
// for ( let i=0; i < B.length;i++){
//   if(B[i]%2!==0) {
//     newArr1.push(B[i])
//   }

// }
// console.log(newArr1)

//chữa?
// const mỳilter = ()=>{
//     let newArr1 = [];
//     for(i=0;i<arr1.length;i++){
//         if(arr1[i] % 2 !== 0){
//             newArr1.push(arr1[i])
//         }
//         return newArr1
//     }
// }


const newArr = B.filter((value)=> value % 2 ===1);
console.log(newArr)
// -Module
// -Tạo project trong reactjs
// -Component trong reactjs