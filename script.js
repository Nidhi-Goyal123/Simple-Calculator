  
   /*let input = document.getElementById("input");
 let buttons =document.querySelectorAll("button");
 let string ="";
 let arr = Array.from(buttons);
 arr.forEach(buttons =>{
    buttons.addEventListener('click', (e)=>{
        if( e.target.innerHTML==="="){
            string = eval(string);
            
            input.value= string;
        }
        
        
        else if (value === "AC") {
            string = ""; // Clear input
            input.value = string;
        } else if (value === "DEL") {
            string = string.slice(0, -1); // Remove the last character
            input.value = string;
        } else {
            string += e.target.innerHTML; // Append the button value
            input.value = string; // Update the input field
        }

    });
});*/

  let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = "";

// Convert NodeList to Array
let arr = Array.from(buttons);

// Add Event Listeners to Buttons
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            
                string = eval(string); // Evaluate the string as math expression
                input.value = string;
            }
         else if (value === "AC") {
            string = " "; // Clear input
            input.value = " ";
        } else if (value === "DEL") {
            string = string.slice(0, -1); // Remove the last character
            input.value =string;
        } else {
            string += value; // Append the button value
            input.value = string; // Update the input field
        }
    });
}); 
 /*let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = "";

// Convert NodeList to Array
let arr = Array.from(buttons);

// Add Event Listeners to Buttons
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string); // Evaluate the math expression
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Display error on invalid input
                string = "";
            }
        } else if (value === "AC") {
            string = " "; // Clear the string
            input.value = " "; // Clear the input field
        } else if (value === "DEL") {
            string = string.slice(0, -1); // Remove the last character
            input.value = string;
        } else {
            string += value; // Append the button value
            input.value = string; // Update the input field
        }
    });
}); */


