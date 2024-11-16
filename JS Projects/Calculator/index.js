function AC(){
    document.getElementById("result");
    result.value=""; //by assigning value as "" it clears the whole input area
}

function show(user){
    document.getElementById("result").value+=user; // += indicates adding of multiple values   //here user is variable used to store the values given by user 
}

function cal(){
    var output=eval(document.getElementById("result").value); // eval is a pre-defined function i.e evaluates the digits given by user
    document.getElementById("result").value=output;
}

function remove(){
    result.value=result.value.slice(0,-1);  //to remove last digit
}