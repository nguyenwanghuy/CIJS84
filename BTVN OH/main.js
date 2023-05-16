// Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. 
// Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )

const arr1 = [1,2,4,5,6];
const arr2 = [1,6, 8, 9, 0]
const arr3 = arr1.concat(arr2)

const newArray = arr3.filter(function(item, index){
    return arr3.indexOf(item) !== index
})
console.log(newArray);


//Bài 2: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.

const arr = [1,54,6,7]
//C1
// const newArr = [];
// for(let i=0; i< arr.length;i++) {
//     newArr.push(arr[i]+5)
// }
//C2
const newArr = arr.map((value) => {
     return value +5
    });
    
console.log(newArr)

//Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. 
//Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];
const ketHop = m.concat(n)

const reMove = ketHop.filter(item => item !== 1 && item !== 8 && item !== 10 && item !== 96 && item !== 7) 
console.log(reMove)

// Bài 4: Cho array 1 như sau: players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },      
//     { id: 13, name: 'Young', age: 35 },        
//     { id: 14, name: 'Mane', age: 21 },          
//     { id: 15, name: 'Salah', age: 24 },
// ]
// Hãy chuyển đổi nó về array có dạng sau: playersModified = 
// { 
// 11: {id: 11, name: "Messi", age: 33},
// 12: {id: 12, name: "Ronaldo", age: 34},
// 13: {id: 13, name: "Young", age: 35},
// 14: {id: 14, name: "Mane", age: 21},
// 15: {id: 15, name: "Salah", age: 24}

const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },
]

players[0].unshift = 11

