
function pow(x,y){
    var z=1
    for(let i=1;i<=y;i++){
       z=z*x
    }
    return z
}
let a=Number(prompt("Enter the number of numbers you want"))
var arr1 =new Array ;
for(let i=0;i<a;i++){
    arr1[i]=Number(prompt("Enter"))
}
var arr2=new Array(a);
for(let i=0;i<a;i++){
    arr2[i]=Number(prompt("Enter"))
}
for(let j=0;j<a ;j++){
    console.log(pow(arr1[j],arr2[j]))
}

