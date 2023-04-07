let ar = [1,2,3,45,6]
let at = [2,3,4,5,6]
let tr = [5,6,7,87]
let rt = [4,5,6,7,23]

let arr = []
ar.sort((a,b)=>(b-a))
at.sort((a,b)=>(b-a))
tr.sort((a,b)=>(b-a))
rt.sort((a,b)=>(b-a))
let t = 0

arr.push(ar[0],at[0],tr[0],rt[0])
console.log(arr);
for(let i= 0 ;i<arr.length;i++){
    
    t+=arr[i]
    
    
}
console.log(t);
