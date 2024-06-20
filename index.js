document.getElementById("confirmButton").addEventListener('click', function(){
    
    //retrieve the values
    var name = document.getElementById('cardName');
    var cardnumber = document.getElementById('cardNumber');
    var month = document.getElementById('cardMonth');
    var year = document.getElementById('cardYear');
    var cvv = document.getElementById('cardCVV');

    //convert into integers
	var mon = parseInt(month.value);
	var yr = parseInt(year.value);
	var cvc = parseInt(cvv.value);
	var isValid = true;

    //validate the values
    if(month.value == "" || year.value == ""){
        document.getElementById("date-message").innerHTML = "Don't be blank";
	    isValid = false;
    }

    if(cvv.value == ""){
        document.getElementById("cvv-message").innerHTML = "Don't be blank";
	    isValid = false;
    }

    if(cardnumber.value == ""){
        document.getElementById("number-message").innerHTML = "Don't be blank";
	    isValid = false;
    }

    if(name.value == ""){
        document.getElementById("name-message").innerHTML = "Don't be blank";
	    isValid = false;
    }

    if(mon > 12 || mon < 1 || yr < 24){
        document.getElementById("date-message").innerHTML = "Invalid Date";
	    isValid = false;
    }

    //if everything is valid then proceed
	if(isValid){

        //put the values in card
		document.getElementById("card-name").innerHTML = name.value;
		document.getElementById("card-number").innerHTML = cardnumber.value;
        document.getElementById("card-date").innerHTML = mon + "/" + yr;
		document.getElementById("cvv").innerHTML = cvc;

        //hide the form
        var formContainer = document.querySelector(".card-form");
        formContainer.style.display = "none";

        //create new div
        var newDiv = document.createElement("div");
        newDiv.classList.add("new-div");
        newDiv.innerHTML = `
        <img src="./images/icon-complete.svg" alt="Complete">
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <a href="./index.html"><button>Continue</button></a>
        
        <style>
            .new-div {
                text-align: center;
                padding: 20px;
                margin-left: 40px;
            }
            
            .new-div button{
                border-radius: 8px;
                height: 40px;
                width: 100%;
                color: white;
                font-size: 18px;
                font-family: serif;
                background-color: hsl(278, 68%, 11%)
            }

            .new-div p{
                font-size: 18px;
                color: gray;
                margin-top: 20px;
                font-family: serif;
                margin-bottom: 20px;
                }

            .new-div h1{
                font-size: 36px;
                font-family: serif;
                margin-top: 30px;
                margin-bottom: 10px;
            }
        </style>`;

        var rightSide = document.querySelector('.right-side');
        rightSide.appendChild(newDiv);
    }
})