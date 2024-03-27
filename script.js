// My Project no. #2





// function for get value from input element entered by user and return it
function getInputValue () {
    // get input element
    const input_el = document.querySelector ("input");
    // get input element value
    const input_val = input_el.value;
    // return it
    return input_val;
}






// function for clear input field
function clearInputField () {
    // get input element
    const input_el = document.querySelector ("input");
    // clear
    input_el.value = "";
}






// function for enable or disable button
function disabledButton (bool) {
    // get button element
    const button_el = document.querySelector ("button");
    // set bool for it
    button_el.disabled = bool;
    // set background color on different state
    if (bool) {
        button_el.style.backgroundColor = "gray";
    }else {
        button_el.style.backgroundColor = "gold";
        // clear input field
        clearInputField ();
    }
}






// This is called when the user clicks the button
// and update percentage text and progress bar
function update () {
    disabledButton(true);
    // get input value from getInputValue function
    let input_val = getInputValue ();
    // condition for check input_val entered by user
    // Number only not empty
    if (input_val) {
        // change input_val to Integer
        input_val = parseInt (input_val);
        // change input_val to absolute (e.g. -75 to 75)
        input_val = Math.abs(input_val);
        // condition for check input_val is greater than 100
        if (input_val > 100) {
            input_val = 100;
        }
    }else {
        input_val = 0;
    }
    // calling function
    updateProgressBar (input_val);
}






// function for change text in paragraph element
function changeTextInPara (num) {
    // get paragraph (para) element (el) by id
    const para_el = document.getElementById ("percentage");
    // change text in paragraph
    para_el.innerText = num + "%";
}






// function for update dash offset value
function updateDashOffset(dashoffset_val) {
    // get circle element by it's Id
    const circle = document.getElementById('progress-circle');
    // set it's transition value to none
    circle.style.transition = 'none'; // Disable transition temporarily
    // set attribute
    circle.setAttribute('stroke-dashoffset', dashoffset_val);
    // Trigger reflow to apply immediate changes
    void circle.offsetWidth;
    // Re-enable transition with empty string (using single quotes)
    circle.style.transition = '';
}






// function for update progress bar
function updateProgressBar (percentage) {
    // here, calculating the dashoffset value from percentage
    const dashoffset_val = Math.round (534 - (534*percentage)/100);
    // update dashoffset with dashoffset_val
    updateDashOffset (dashoffset_val);
    // get paragraph (para) element (el) by id
    const para_el = document.getElementById ("percentage");
    // get innerText value of para_el
    // and remove '%' with replace method
    let current_percentage = para_el.innerText.replace ("%", "");
    // condition
    if (current_percentage < percentage) {
        // calculate the interval time for increasePercentage
        const interval_time = Math.round (2000/(percentage - current_percentage));
        // calling increasePercentage
        increasePercentage (current_percentage, percentage, interval_time);
    }else if (current_percentage > percentage) {
        // calculate the interval time for decreasePercentage
        const interval_time = Math.round (2000/(current_percentage - percentage));
        // calling decreasePercentage
        decreasePercentage (current_percentage, percentage, interval_time);
    }else {
        disabledButton (false);
    }
}






// function for increase percentage
function increasePercentage (current_percentage, percentage, interval_time) {
    const my_interval = setInterval ( () => {
        changeTextInPara (current_percentage);
        current_percentage ++;
        
        if (current_percentage > percentage) {
            clearInterval (my_interval);
            disabledButton (false);
        }
    }, interval_time);
}






// function for decrease percentage
function decreasePercentage (current_percentage, percentage, interval_time) {
    const my_interval = setInterval ( () => {
        changeTextInPara (current_percentage);
        current_percentage --;
        
        if (current_percentage < percentage) {
            clearInterval (my_interval);
            disabledButton (false);
        }
    }, interval_time);
}








// Hope you liked this code.
// I have written a post for this code. You can checkout if you want.
// Please let me know in the comments so I can improve it further.

// My name is SONU JANGIR.
// I'm 24 years old.
// I Love coding and art
// I make projects for people who like it.



















