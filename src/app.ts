var input1 = document.getElementById("input-1");
var input2 = document.getElementById("input-2");
interface Book {
  title: string;
}
function add(num1, num2) {
  return num1 + num2;
}
const book: Book = { title: "some" };
console.log(book);
