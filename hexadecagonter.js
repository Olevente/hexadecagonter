

// * File: hexadecagonter.js
// * Author: Orosz Levente
// * Copyright: 2022, Orosz Levente
// * Group: Szoft-II-N
// * Date: 2022-10-27
// * Github: https://github.com/Olevente/
// * Licenc: GNU GPL


let oldalObj = document.getElementById('oldal');
let teruletObj = document.getElementById('terulet');
let szamolGomb = document.getElementById('szamolGomb');

function szamolTerulet(oldal) {
    let terulet = 4 * Math.pow(oldal, 2) * 
        Math.cos(Math.PI/16)/Math.sin(Math.PI/16);
    return terulet;
}

szamolGomb.addEventListener('click', function(){
    let oldal = Number(oldalObj.value);
    let terulet = szamolTerulet(oldal);
    teruletObj.value = terulet.toFixed(2);
});