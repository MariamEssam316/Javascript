let x=prompt("Enter a color ")
let y=Number(prompt("Enter a font size"))
function colors(x,y){
    let element=document.getElementsByTagName('p')
    for(let i=0;i<element.length;i++){
        element[i].style.color= x;
        element[i].style.fontSize=y+"px";
    }
}