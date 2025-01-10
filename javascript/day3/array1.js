// only in js array is an object it is used to store collection of data 
// syntax: arr = [value1,value2,]
// const arr = ["hello",20,30,40,true,"quickxpert",false];
// console.log(typeof(arr));
// document.write(arr[5] + "<br>")
// document.write(arr[1] + "<br>")
// document.write(arr)

// let newArr = [
//     10,20,30,"quickxpert",
//     [true,false],
//     ["sing","dance", "swim",[20,30,40],50]
// ]

// document.write(newArr)
// document.write(newArr[4])
// document.write(newArr[4] [1], " ",newArr[5][2], newArr[5][4])


let taskarr = [
    10,20,30,["qucxpert","infotech"],40,
    [false,true],
    ["good",100,"day"], ["apple","mango","grapes"]
]

// infotech
// 100
// grapes 

// document.write(taskarr[3][1] + "<br>",taskarr[6][1] + "<br>" , taskarr[7][2])

document.write((taskarr)+"=====>original array")
// document.write(taskarr[1]="ankit")

var updateArr = taskarr[1]= "ankit";
document.write(updateArr,"<br>");
document.write(taskarr)

