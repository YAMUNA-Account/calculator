let output = document.getElementById("input");
function display(num){
    output.style.backgroundColor="rgb(241, 234, 255)"
    output.value +=num;
}

function calculate(){
    try{
        output.style.backgroundColor="rgb(229, 253, 209)";
        output.style.color="rgb(12, 12, 12)"
        output.value=eval(output.value);
    }
    catch(err){
        output.style.backgroundColor="red";
        alert("Input invalid");
        
    }
}
function Clear(){
    output.value="";
    output.style.backgroundColor="white";
}
function del(){
    output.value=output.value.slice(0,-1);
}