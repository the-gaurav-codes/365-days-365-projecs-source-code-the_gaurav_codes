// Created by: Gaurav  
// 🔹GitHub: https://github.com/the-gaurav-codes 
// 🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

// Date: February 2025 

// taking input element
const celsius =document.getElementById('celsius');
const fahrenheit =document.getElementById('fahrenheit');
const kelvin =document.getElementById('kelvin');

const input_box = document.getElementsByClassName('input_box');
Created by: Gaurav  
// 🔹GitHub: https://github.com/the-gaurav-codes 
// 🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

// Date: February 2025 
for(let i=0; i<input_box.length; i++){
    let input= input_box[i];

    input.addEventListener("input", function (e){
        let value = parseFloat(e.target.value);
        // console.log(e.target.name + " : " + value);
        let result;
        Created by: Gaurav  
// 🔹GitHub: https://github.com/the-gaurav-codes 
// 🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

// Date: February 2025 
        switch(e.target.name){
            case "celsius":
                 result = value + 273.32;
                kelvin.value = parseFloat(result.toFixed(3));
                result = (value *1.8) + 32;
                fahrenheit.value = parseFloat(result.toFixed(3));
                // console.log("celsius");
                break;
            case "fahrenheit":
                 result = (value - 32)/1.8;
                celsius.value = parseFloat(result.toFixed(3));
                result = ((value - 32)/1.8) + 273.15;
                kelvin.value = parseFloat(result.toFixed(3));
                // console.log("fahrenheit");
                break;
                Created by: Gaurav  
// 🔹GitHub: https://github.com/the-gaurav-codes 
// 🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

// Date: February 2025 
            case "kelvin":
                result = value - 273.15;
                celsius.value = parseFloat(result.toFixed(3));
                result = ((value - 273.15)*1.8) + 32;
                fahrenheit.value = parseFloat(result.toFixed(3));
                // console.log("kelvin");
                break;
        }
    });
}
Created by: Gaurav  
// 🔹GitHub: https://github.com/the-gaurav-codes 
// 🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

// Date: February 2025 