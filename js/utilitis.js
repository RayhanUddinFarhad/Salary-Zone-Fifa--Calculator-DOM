function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
}


function getText (id) {

    return document.getElementById(id).innerText;
    
}

function getInput (id) {

    return document.getElementById(id).value;
 }
 function setText (id, value) { 

   const values = document.getElementById(id).innerText = value;
   return values;

 }