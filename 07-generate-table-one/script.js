/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let doel = document.getElementById("target");

    let tabel = document.createElement("table");

    let rij = document.createElement("tr");
    tabel.appendChild(rij);

    for (i = 0; i < 10; i++){
        let data = document.createElement("td");
        let inhoud = document.createTextNode("Dit is een cel");
        data.appendChild(inhoud);
        rij.appendChild(data);
    }

    doel.appendChild(tabel);

})();
