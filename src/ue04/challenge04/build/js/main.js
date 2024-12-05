"use strict";
// Enum für die Pizzagröße
var PizzaGroesse;
(function (PizzaGroesse) {
    PizzaGroesse["klein"] = "klein";
    PizzaGroesse["mittel"] = "mittel";
    PizzaGroesse["gross"] = "gross";
})(PizzaGroesse || (PizzaGroesse = {}));
// Enum für die Zutaten
var Zutaten;
(function (Zutaten) {
    Zutaten["Tomaten"] = "Tomaten";
    Zutaten["Kaese"] = "K\u00E4se";
    Zutaten["Salami"] = "Salami";
    Zutaten["Pilze"] = "Pilze";
    Zutaten["Oliven"] = "Oliven";
})(Zutaten || (Zutaten = {}));
// Funktion zur Berechnung des Pizzapreises
function berechnePreis(pizza) {
    let basisPreis;
    // Basispreis abhängig von der Größe
    switch (pizza.groesse) {
        case PizzaGroesse.klein:
            basisPreis = 8;
            break;
        case PizzaGroesse.mittel:
            basisPreis = 10;
            break;
        case PizzaGroesse.gross:
            basisPreis = 12;
            break;
        default:
            basisPreis = 0; // Fehlerfall
    }
    // Aufpreis für Beläge (ab dem 3. Belag)
    if (pizza.belaege.length > 2) {
        basisPreis += (pizza.belaege.length - 2) * 0.5;
    }
    // Ausgabe von Extrawünschen
    if (pizza.extraWuensche) {
        console.log(`Extra Wünsche: ${pizza.extraWuensche}`);
    }
    return basisPreis;
}
// Funktion zur Bestellung einer Pizza
function bestellePizza(kunde, pizza) {
    const gesamtPreis = berechnePreis(pizza);
    console.log(`Bestellung für ${kunde.name} an ${kunde.adresse}`);
    console.log(`Pizza ${pizza.groesse} mit ${pizza.belaege.join(', ')}`);
    console.log(`Gesamtpreis: ${gesamtPreis}€`);
    console.log(`Zahlungsart: ${kunde.zahlungsart}`);
}
// Beispielhafte Verwendung
const meinePizza = {
    groesse: PizzaGroesse.mittel,
    belaege: [Zutaten.Tomaten, Zutaten.Kaese, Zutaten.Salami, Zutaten.Pilze],
    extraWuensche: 'extra scharf',
};
const meinePizza2 = {
    groesse: PizzaGroesse.gross,
    belaege: [Zutaten.Tomaten, Zutaten.Kaese, Zutaten.Salami, Zutaten.Pilze, Zutaten.Oliven],
};
const meinKunde = {
    name: 'Max Mustermann',
    adresse: 'Musterstraße 1, 12345 Musterstadt',
    telefonnummer: '0123456789',
    zahlungsart: 'karte',
};
bestellePizza(meinKunde, meinePizza);
bestellePizza(meinKunde, meinePizza2);
