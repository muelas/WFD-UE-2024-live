// Enum für die Pizzagröße
enum PizzaGroesse {
    klein = 'klein',
    mittel = 'mittel',
    gross = 'gross',
}

// Enum für die Zutaten
enum Zutaten {
    Tomaten = 'Tomaten',
    Kaese = 'Käse',
    Salami = 'Salami',
    Pilze = 'Pilze',
    Oliven = 'Oliven',
}

// Typ Alias für den Belag
type Belag = string;

// Typ Alias für die Pizza
type Pizza = {
    groesse: PizzaGroesse;
    belaege: Belag[];
    extraWuensche?: string; // Optionaler String für Extrawünsche
};

// Union Type für die Zahlungsart
type Zahlungsart = 'bar' | 'karte' | 'paypal';

// Interface für den Kunden
interface Kunde {
    name: string;
    adresse: string;
    telefonnummer: string;
    zahlungsart: Zahlungsart;
}

// Funktion zur Berechnung des Pizzapreises
function berechnePreis(pizza: Pizza): number {
    let basisPreis: number;

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
function bestellePizza(kunde: Kunde, pizza: Pizza): void {
    const gesamtPreis = berechnePreis(pizza);

    console.log(`Bestellung für ${kunde.name} an ${kunde.adresse}`);
    console.log(`Pizza ${pizza.groesse} mit ${pizza.belaege.join(', ')}`);
    console.log(`Gesamtpreis: ${gesamtPreis}€`);
    console.log(`Zahlungsart: ${kunde.zahlungsart}`);
}

// Beispielhafte Verwendung
const meinePizza: Pizza = {
    groesse: PizzaGroesse.mittel,
    belaege: [Zutaten.Tomaten, Zutaten.Kaese, Zutaten.Salami, Zutaten.Pilze],
    extraWuensche: 'extra scharf',
};
const meinePizza2: Pizza = {
    groesse: PizzaGroesse.gross,
    belaege: [Zutaten.Tomaten, Zutaten.Kaese, Zutaten.Salami, Zutaten.Pilze, Zutaten.Oliven],
}

const meinKunde: Kunde = {
    name: 'Max Mustermann',
    adresse: 'Musterstraße 1, 12345 Musterstadt',
    telefonnummer: '0123456789',
    zahlungsart: 'karte',
};

bestellePizza(meinKunde, meinePizza);
bestellePizza(meinKunde, meinePizza2);
