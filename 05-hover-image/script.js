/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("img").addEventListener("mouseover", function(){

        let plaatje = document.querySelector("img");
        let bron = plaatje.getAttribute("data-hover");
        plaatje.setAttribute("src", bron);

    })

})();



