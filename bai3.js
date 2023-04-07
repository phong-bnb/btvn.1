let arr = "đời người có bao nhiêu 60 năm tuổi tròn"
let art = []
for(let i = 0;i<arr.length;i++){

    art.unshift(arr[i])
}
console.log(art);
// Hoặc cách 2 :
let str = "đời người có bao nhiêu 60 năm tuổi tròn";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);