/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let doel = document.getElementById("target");

    let tabel = document.createElement("table");

    for (let i = 1; i < 11; i++){
        let rij = document.createElement("tr");


        for (let j = 1; j < 11; j++){
           let cel = document.createElement("td");
           let inhoud = document.createTextNode(" " + i*j);
           cel.appendChild(inhoud);
           rij.appendChild(cel);
        }
        tabel.appendChild(rij);
    }

    doel.appendChild(tabel);

})();

//