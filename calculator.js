let number1 , number2 , operator;
number1 = parseFloat(prompt('Enter a number: \n'));  
number2 = parseFloat(prompt ('Enter another number: \n'));  
operator = prompt('Choose an operator: \n');

if (operator == '+') { 
    result = number1 + number2; 
    console.log(result);
    window.alert(" Answer = " + result);  
}
else if (operator == '-') { 
    result = number1 - number2;
    console.log(result);
    window.alert(" Answer = "+ result);  
}
else if (operator == '/') { 
    result = number1 / number2;
    console.log(result);
    window.alert(" Answer = " + result);  
}
else { 
    result = number1 * number2; 
    console.log(result);
    window.alert(" Answer = " + result);  
}


