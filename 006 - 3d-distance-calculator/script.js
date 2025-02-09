/* Created by: Gaurav  
🔹GitHub: https://github.com/the-gaurav-codes 
🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

Date: February 2025  */
function calculate() {
    // Get input values
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var z1 = parseFloat(document.getElementById('z1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);
    var z2 = parseFloat(document.getElementById('z2').value);

  /* Created by: Gaurav  
🔹GitHub: https://github.com/the-gaurav-codes 
🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

Date: February 2025  */
  // Check if input values are valid
    if (isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers for both points.';
        return;
    }

    // Calculate distance
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));

    // Display the result
    document.getElementsByClassName('display')[0].innerHTML = '<span>|AB| = </span>' + distance.toFixed(3);
}/* Created by: Gaurav  
🔹GitHub: https://github.com/the-gaurav-codes 
🔹Instagram: https://www.instagram.com/the_gaurav_codes/  

Date: February 2025  */
