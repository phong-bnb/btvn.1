let a = +prompt("nhập số gì đó :")
let b = [] 
let sum = 0 
for(let i = 0 ; i<a;i++){
    if(a%i==0){
b.push(i)
    }
}
for(let i = 0 ;i< b.length;i++){
    sum+=b[i]
}
if(sum===a){
    console.log(" số hoàn hảo");
} else{
    console.log("số không hoàn hảo");
}