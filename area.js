const baseInput = document.querySelector(".base-input");
const sideInput = document.querySelector(".side-input");
console.log(sideInput);
const submitBtn = document.querySelector(".submit-btn");
const outPut = document.querySelector(".output");


outPut.innerText="A=1/2(b*h)";







function clickEvent()
{
    var h=sideInput.value;
    var b=baseInput.value;
    if(b>0&&h>0)
    {
    var mult = b*h;
    var A = mult*(1/2);
    
    outPut.innerText = A;
    }
    else {
        outPut.innerText="please enter some valid input";  
    }
}




submitBtn.addEventListener('click',clickEvent);
