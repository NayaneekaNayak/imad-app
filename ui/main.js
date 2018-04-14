var button= document.getElementById('counter');
var counter = 0;
button.onclick= function() { 
    // Make a request to counter endpoint
    
    
    // capture the response and store it in a variable
    
    
    // render the variable in correct
    
    counter = counter + 1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
};