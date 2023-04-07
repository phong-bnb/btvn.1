let arr=[4,6,7,48,4,5,87,89,34,4,7,3,3,56]
let n = 3
let trt= []
let tyt = []


   
        for(let i=0;i<arr.length;i++){
      trt.push(arr.splice(i,i+n));  
    
    }
    
    console.log(trt); 
   


    
