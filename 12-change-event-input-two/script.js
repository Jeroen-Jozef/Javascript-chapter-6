/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let input = document.getElementById("pass-one");
    let validity = document.getElementById("validity");

    //input.setAttribute("minlength", 8);

    //let countNAN = 0;


    input.addEventListener("input", function () {
        let countNumber = 0;
        let num = input.value;
        let inputLength = num.length;
        for (i = 0; i < inputLength; i++) {
            var karakter = num.charAt(i);
            for (j = 0; j < 9; j++) {
                if (j === parseInt(karakter)) {
                    countNumber++;
                }
            }
        }
        if ((inputLength >= 8) && (countNumber >= 2)) {
            validity.innerHTML = "ok";
        }

    });

})();


/* first try

let input = document.getElementById("pass-one");
    let validity = document.getElementById("validity");

    //input.setAttribute("minlength", 8);

    let countNAN = 0;
    let countNumber = 0;

    input.addEventListener("input", function () {
        let num = input.value;
        let inputLength = input.length;

        if {
            countNummber++;
        }
        function checkPassword(){
            if ((input.length >= 8) && (countNumber >= 2)){
                validity.innerHTML = "ok";
            }
        }
    });

 */

/*
document.getElementById("pass-one").setAttribute("minlength", 8);
    document.getElementById("pass-one").addEventListener("input", function(e){

        let input = document.getElementById("pass-one").value;
        let valid = document.getElementById("validity");

        let regEx = new regExp()
    })
 */