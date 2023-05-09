// 1. let và const

// var/let và const
// var/let dùng để khởi tạo những biến mà có thể thay đổi giá trị
// const dùng để khởi tạo những biến hằng số

// var và let/const
// Biến được khởi bằng từ khóa let/const thì sẽ chỉ có phạm vi sử dụng trong scope đó
// Biến được khởi tạo bằng từ khóa var thì sẽ có phạm vi là global scope
// -hoisting

// 2. Arrow Function
// function sum(a, b) {
// 	console.log('sum 2 numbers');
// 	return a + b;
// }

//   // Arrow function, no hoisting supported, no context
// const sum = (a, b) => {
// 	return a + b;
// };
// const sum = (a) => a * a;

// console.log(sum(3, 5));
// let/const/var nameFn = (parameters) => {
//     // đoạn code thực thi
// }

// const arr = [1, 2, 3, 4, 5];
// const total = arr
// 	.filter((item) => item % 2 === 0) //[2,4]
// 	.reduce((value, item) => value + item, 10);

// console.log(total);

// 3. Destructuring
const date = {
	d: 5,
	m: 7,
	y: 2024,
};

const { d: day, m, y = 2023 } = date;
console.log(day);
// console.log(m);
// console.log(y);