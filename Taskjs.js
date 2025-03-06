// style of body
var body=document.body;
body.style.backgroundColor='lightgrey';

// style of nav
var nav=document.createElement('nav');
body.appendChild(nav);
nav.style.backgroundColor='white';
nav.style.width='1535px';
nav.style.height='60px'
nav.style.marginLeft='-8px'
nav.style.marginTop='-19px'

// style of h1
var h1=document.createElement('h1');
h1.textContent='DOP';
h1.style.color='green';
h1.style.fontFamily='Arial, Helvetica, sans-serif';
h1.style.width='5%'
h1.style.textAlign='center'
h1.style.display='inline-block'
nav.appendChild(h1);

// style of div of anchors
var divOfa=document.createElement('div');
nav.appendChild(divOfa);
divOfa.style.display='inline-block'
divOfa.style.marginLeft='1220px'

// style of anchors
const arrOfa=new Array(4).fill(null);
for(var i=0;i<arrOfa.length;i++){
    arrOfa[i]=document.createElement('a');
    arrOfa[i].style.color='darkgray';
    arrOfa[i].style.marginLeft='10px'
    divOfa.appendChild(arrOfa[i]);
}
arrOfa[0].textContent='Home';
arrOfa[1].textContent='Services';
arrOfa[2].textContent='About';
arrOfa[3].textContent='Contact';

// first line
// style of div first line 
var divOfdiv1=document.createElement('div');
body.appendChild(divOfdiv1)
const arrOfDiv1=new Array(3).fill(null);
for(var i=0;i<arrOfDiv1.length;i++){
    arrOfDiv1[i]=document.createElement('div');
    arrOfDiv1[i].style.width='480px'
    arrOfDiv1[i].style.height='100px'
    arrOfDiv1[i].style.backgroundColor='white'
    arrOfDiv1[i].style.border='3px solid rgb(192, 192, 192) '
    arrOfDiv1[i].style.display='inline-block'
    arrOfDiv1[i].style.marginLeft='10px'
    arrOfDiv1[i].style.marginTop='10px'
    divOfdiv1.appendChild(arrOfDiv1[i])
    
}


// style p1 inside divs first line
const p1=new Array(3).fill(null);
for(var i=0;i<p1.length;i++){
    p1[i]=document.createElement('p');
    p1[i].textContent='Product'
    p1[i].style.color='darkgrey'
    p1[i].style.textAlign='center'
    p1[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv1[i].appendChild(p1[i])
    
}

// style h1 inside divs first line
const h11=new Array(3).fill(null);
for(var i=0;i<h11.length;i++){
    h11[i]=document.createElement('h1');
    h11[i].style.textAlign='center'
    h11[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv1[i].appendChild(h11[i])  
}
h11[0].textContent='1'
h11[1].textContent='2'
h11[2].textContent='3'

// second line
// style of div second line 
var divOfdiv2=document.createElement('div');
body.appendChild(divOfdiv2)
const arrOfDiv2=new Array(3).fill(null);
for(var i=0;i<arrOfDiv2.length;i++){
    arrOfDiv2[i]=document.createElement('div');
    arrOfDiv2[i].style.width='480px'
    arrOfDiv2[i].style.height='100px'
    arrOfDiv2[i].style.backgroundColor='white'
    arrOfDiv2[i].style.border='3px solid rgb(192, 192, 192) '
    arrOfDiv2[i].style.display='inline-block'
    arrOfDiv2[i].style.marginLeft='10px'
    arrOfDiv2[i].style.marginTop='10px'
    divOfdiv2.appendChild(arrOfDiv2[i])
    
}


// style p2 inside divs second line
const p2=new Array(3).fill(null);
for(var i=0;i<p2.length;i++){
    p2[i]=document.createElement('p');
    p2[i].textContent='Product'
    p2[i].style.color='darkgrey'
    p2[i].style.textAlign='center'
    p2[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv2[i].appendChild(p2[i])
    
}


// style h1 inside divs second line
const h12=new Array(3).fill(null);
for(var i=0;i<h12.length;i++){
    h12[i]=document.createElement('h1');
    h12[i].style.textAlign='center'
    h12[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv2[i].appendChild(h12[i])  
}
h12[0].textContent='4'
h12[1].textContent='5'
h12[2].textContent='6'


// third line
// style of div third line 
var divOfdiv3=document.createElement('div');
body.appendChild(divOfdiv3)
const arrOfDiv3=new Array(3).fill(null);
for(var i=0;i<arrOfDiv3.length;i++){
    arrOfDiv3[i]=document.createElement('div');
    arrOfDiv3[i].style.width='480px'
    arrOfDiv3[i].style.height='100px'
    arrOfDiv3[i].style.backgroundColor='white'
    arrOfDiv3[i].style.border='3px solid rgb(192, 192, 192) '
    arrOfDiv3[i].style.display='inline-block'
    arrOfDiv3[i].style.marginLeft='10px'
    arrOfDiv3[i].style.marginTop='10px'
    divOfdiv3.appendChild(arrOfDiv3[i])
    
}


// style p2 inside divs third line
const p3=new Array(3).fill(null);
for(var i=0;i<p3.length;i++){
    p3[i]=document.createElement('p');
    p3[i].textContent='Product'
    p3[i].style.color='darkgrey'
    p3[i].style.textAlign='center'
    p2[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv3[i].appendChild(p3[i])
    
}


// style h1 inside divs third line
const h13=new Array(3).fill(null);
for(var i=0;i<h13.length;i++){
    h13[i]=document.createElement('h1');
    h13[i].style.textAlign='center'
    h13[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv3[i].appendChild(h13[i])  
}
h13[0].textContent='7'
h13[1].textContent='8'
h13[2].textContent='9'


// fourth line
// style of div fourth line 
var divOfdiv4=document.createElement('div');
body.appendChild(divOfdiv4)
const arrOfDiv4=new Array(3).fill(null);
for(var i=0;i<arrOfDiv4.length;i++){
    arrOfDiv4[i]=document.createElement('div');
    arrOfDiv4[i].style.width='480px'
    arrOfDiv4[i].style.height='100px'
    arrOfDiv4[i].style.backgroundColor='white'
    arrOfDiv4[i].style.border='3px solid rgb(192, 192, 192) '
    arrOfDiv4[i].style.display='inline-block'
    arrOfDiv4[i].style.marginLeft='10px'
    arrOfDiv4[i].style.marginTop='10px'
    divOfdiv4.appendChild(arrOfDiv4[i])
    
}


// style p4 inside divs fourth line
const p4=new Array(3).fill(null);
for(var i=0;i<p4.length;i++){
    p4[i]=document.createElement('p');
    p4[i].textContent='Product'
    p4[i].style.color='darkgrey'
    p4[i].style.textAlign='center'
    p4[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv4[i].appendChild(p4[i])
    
}

// style h1 inside divs fourth line
const h14=new Array(3).fill(null);
for(var i=0;i<h14.length;i++){
    h14[i]=document.createElement('h1');
    h14[i].style.textAlign='center'
    h14[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv4[i].appendChild(h14[i])  
}
h14[0].textContent='10'
h14[1].textContent='11'
h14[2].textContent='12'


// fifth line
// style of div fifth line 
var divOfdiv5=document.createElement('div');
body.appendChild(divOfdiv5)
const arrOfDiv5=new Array(3).fill(null);
for(var i=0;i<arrOfDiv5.length;i++){
    arrOfDiv5[i]=document.createElement('div');
    arrOfDiv5[i].style.width='480px'
    arrOfDiv5[i].style.height='100px'
    arrOfDiv5[i].style.backgroundColor='white'
    arrOfDiv5[i].style.border='3px solid rgb(192, 192, 192) '
    arrOfDiv5[i].style.display='inline-block'
    arrOfDiv5[i].style.marginLeft='10px'
    arrOfDiv5[i].style.marginTop='10px'
    divOfdiv5.appendChild(arrOfDiv5[i])
    
}


// style p5 inside divs fifth line
const p5=new Array(3).fill(null);
for(var i=0;i<p5.length;i++){
    p5[i]=document.createElement('p');
    p5[i].textContent='Product'
    p5[i].style.color='darkgrey'
    p5[i].style.textAlign='center'
    p5[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv5[i].appendChild(p5[i])
    
}

// style h1 inside divs fifth line
const h15=new Array(3).fill(null);
for(var i=0;i<h15.length;i++){
    h15[i]=document.createElement('h1');
    h15[i].style.textAlign='center'
    h15[i].style.fontFamily='Arial, Helvetica, sans-serif';
    arrOfDiv5[i].appendChild(h15[i])  
}
h15[0].textContent='13'
h15[1].textContent='14'
h15[2].textContent='15'


// last div
var div6=document.createElement('div')
body.appendChild(div6);

div6.style.backgroundColor=' rgb(7, 104, 7)';
div6.style.width='1472px'
div6.style.height='60px'
div6.style.marginLeft='13px'
div6.style.marginTop='13px'
div6.style.display='flex'
div6.style.justifyContent='center' 
div6.style.alignItems='center'

var pOfdiv=document.createElement('p')
pOfdiv.style.color='white'
pOfdiv.textContent='Made By El DapDop <3'
pOfdiv.style.fontFamily='Arial, Helvetica, sans-serif';
pOfdiv.style.margin = '0px'

div6.appendChild(pOfdiv)



















