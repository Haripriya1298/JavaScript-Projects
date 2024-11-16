function popup(){
    var popup=document.getElementById("container");
    popup.style.display="block";
}

function validate(){ 
    let cardNumber=document.getElementById("number").value.trim();
    let cardName=document.getElementById("name").value.trim();
    var regex=/^[6-9]{1}[0-9]{5}$/
    var regex1=/^[a-z A-Z]{2,20}$/
    if(cardNumber==0 && cardName==0){
        alert("card number and card name can't be empty")
    }
    else if(cardNumber.length>0 && cardName.length==0){
        alert("enter card name")
    }
    else if(cardNumber.length==0 && cardName.length>0){
        alert("enter card number")
    }
    else if(cardName.length>0 && cardNumber.length>0){
        if((regex.test(cardNumber)) && regex1.test(cardName )){
        alert("success")
    }
    else{
        alert("please check your card number or card name")
    }
}
   
}
function cancel(){
    var c=document.getElementById("container");
    c.style.display="none";
}

