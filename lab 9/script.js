let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]
let newArr = arr1.concat(arr2)
console.log(newArr)

let arrStr = ["welcome", "ali", "and", "sara"]
let str = arrStr.join(", ");
console.log(arrStr)

for (var i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i]);
}
console.log("")

arrStr.forEach(function (element) {
    console.log(element)
})
console.log("")

for (var element of arrStr) {
    console.log(element)
}


let arr4 = ["a", "welcome", "fine", "line"]
let sorted = arr4.sort()
console.log(sorted)

let arr5 = [12, 2, 5]
console.log(arr5.sort((a, b) => a - b))

// var obj1 = document.getElementsById("first")
// console.log(obj1)

var obj2 = document.getElementsByClassName("hello")
console.log(obj2)

var obj3 = document.getElementsByTagName("h2")
console.log(obj3)

// var obj5 = document.querySelector("")

// obj1.innerHTML = "test";

var obj6 = document.getElementsByTagName("input")[0]
// obj6.setAttribute("placeholder", "test");

let element1 = document.createElement("div")
let text = document.createTextNode("text")

element1.appendChild(text)
document.body.appendChild(element1)

var obj8 = document.getElementsByTagName("button")[0]
obj8.addEventListener("click", function () {
    alert("hello")
})