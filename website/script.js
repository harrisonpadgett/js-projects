const red = "rgb(255, 255, 255) 0px 0px 50px 0px inset, rgb(255, 0, 0) 20px 0px 100px 0px inset, rgb(255, 255, 255) -20px 0px 80px 0px inset, rgb(255, 0, 0) 20px 0px 300px 0px inset, rgb(255, 255, 255) -20px 0px 300px 0px inset, rgb(255, 255, 255) 0px 0px 50px 0px, rgb(255, 0, 0) -10px 0px 80px 0px, rgb(255, 255, 255) 10px 0px 80px 0px";

const green = "rgb(255, 255, 255) 0px 0px 50px 0px inset, rgb(0, 255, 0) 20px 0px 100px 0px inset, rgb(255, 255, 255) -20px 0px 80px 0px inset, rgb(0, 255, 0) 20px 0px 300px 0px inset, rgb(255, 255, 255) -20px 0px 300px 0px inset, rgb(255, 255, 255) 0px 0px 50px 0px, rgb(0, 255, 0) -10px 0px 80px 0px, rgb(255, 255, 255) 10px 0px 80px 0px";

function changeButton(btn) {
    let element = document.getElementById(btn);
    let currentColor = window.getComputedStyle(element).boxShadow;
    if(currentColor === green)
    {
        document.getElementById(btn).style.boxShadow = red;
    }
    else if(currentColor === red)
    {
        document.getElementById(btn).style.boxShadow = green;
    }
}