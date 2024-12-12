"use strict";
// Pinguin-Gehege
const pinguinGehege = {
    name: "Pinguin-Gehege",
    groesse: 100,
    tiere: [
        { kiemenAtmung: false, groesse: 0.5, lieblingsBeute: "Fisch" },
        { kiemenAtmung: false, groesse: 0.4, lieblingsBeute: "Krill" },
        { kiemenAtmung: false, groesse: 0.6, lieblingsBeute: "Tintenfisch" },
    ],
};
// Flughund-Gehege
const flughundGehege = {
    name: "Flughund-Gehege",
    groesse: 200,
    tiere: [
        { spannweite: 1.5, lieblingsPflanze: "Feige" },
        { spannweite: 1.2, lieblingsPflanze: "Mango" },
        { spannweite: 1.7, lieblingsPflanze: "Banane" },
    ],
};
// 3. Fütterung:
function fuetterePflanzenfresser(tier) {
    console.log(`${tier.lieblingsPflanze} wird an ${tier.lieblingsPflanze}-liebenden Pflanzenfresser verfüttert.`);
}
function fuettereLandtierFleischfresser(tier) {
    if (tier.groesse > 1) {
        console.log(`Großes Stück Fleisch wird an ${tier.lieblingsBeute}-liebenden Fleischfresser verfüttert.`);
    }
    else {
        console.log(`Kleines Stück Fleisch wird an ${tier.lieblingsBeute}-liebenden Fleischfresser verfüttert.`);
    }
}
function fuettereWassertierPflanzenfresser(tier) {
    if (tier.kiemenAtmung) {
        console.log(`Wasserpflanzen werden an ${tier.lieblingsPflanze}-liebenden Pflanzenfresser mit Kiemenatmung verfüttert.`);
    }
    else {
        console.log(`${tier.lieblingsPflanze} wird an ${tier.lieblingsPflanze}-liebenden Pflanzenfresser verfüttert.`);
    }
}
// 5. Generics:
function erstelleListe(tiere) {
    return tiere.map((tier) => JSON.stringify(tier)).join(", ");
}
const wassertiere = [
    { kiemenAtmung: true },
    { kiemenAtmung: false },
    { kiemenAtmung: true },
];
const landtiere = [
    { groesse: 0.5 },
    { groesse: 1.8 },
    { groesse: 0.2 },
];
const numberArray = [1, 2, 3, 4, 5];
console.log("Wassertiere:", erstelleListe(wassertiere));
console.log("Landtiere:", erstelleListe(landtiere));
console.log("Zahlen: ", erstelleListe(numberArray));
// 5. Generics (alternative Lösung):
function erstelleListe2(tiere) {
    let ergebnis = "";
    for (let i = 0; i < tiere.length; i++) {
        const tier = tiere[i];
        if (typeof tier === "object") {
            ergebnis += "{ ";
            for (let key in tier) {
                ergebnis += `${key}: ${tier[key]}, `;
            }
            ergebnis = ergebnis.slice(0, -2); // Entferne das letzte Komma und Leerzeichen
            ergebnis += " }";
        }
        else {
            ergebnis += String(tier);
        }
        if (i < tiere.length - 1) {
            ergebnis += "; ";
        }
    }
    return ergebnis;
}
console.log("Wassertiere:", erstelleListe2(wassertiere));
console.log("Landtiere:", erstelleListe2(landtiere));
console.log("Zahlen: ", erstelleListe2(numberArray));
