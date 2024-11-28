// Schnittstellen/Typen definieren
interface Song {
    titel: string;
    dauer: number;
}

interface Musiker {
    name: string;
    aktiv: boolean;
    songs: Song[];
}

// Objekte erstellen
const musiker: Musiker[] = [
    {
        name: "Bring Me The Horizon",
        aktiv: true,
        songs: [
            { titel: "Can You Feel My Heart", dauer: 210 },
            { titel: "Sleepwalking", dauer: 240 },
        ],
    },
    {
        name: "Architects",
        aktiv: true,
        songs: [
            { titel: "Animals", dauer: 250 },
            { titel: "Doomsday", dauer: 230 },
        ],
    },
];

// Funktionen definieren
function alleMusikerAuflisten(musiker: Musiker[]): void {
    musiker.forEach(m => {
        console.log(`Name: ${m.name}, Aktiv: ${m.aktiv}`);
    });
}

function alleSongsAuflisten(musiker: Musiker[]): void {
    musiker.forEach(m => {
        m.songs.forEach(s => {
            console.log(`Titel: ${s.titel}, Dauer: ${s.dauer}`);
        });
    });
}

function songDauerBerechnen(songs: Song[]): number {
    return songs.reduce((total, song) => total + song.dauer, 0);
}

function gesamtdauerBerechnen(musiker: Musiker[]): number {
    return musiker.reduce((total, m) => total + songDauerBerechnen(m.songs), 0);
}

// Beispielhafte Nutzung
alleMusikerAuflisten(musiker);
alleSongsAuflisten(musiker);
console.log(`Gesamtdauer aller Songs: ${gesamtdauerBerechnen(musiker)} Sekunden`);
