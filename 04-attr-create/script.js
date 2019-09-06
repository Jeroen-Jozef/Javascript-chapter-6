/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let attr = document.getElementById("source").getAttribute("data-image");
    let plaatje = document.createElement("img");
    plaatje.setAttribute("src", attr);
    let waar = document.getElementById("target");
    waar.appendChild(plaatje);
    let magWegOuder = document.querySelector(".material");
    let magWeg = document.getElementById("source");
    magWeg.removeAttribute("data-image");
    magWegOuder.removeChild(magWeg);
})();
