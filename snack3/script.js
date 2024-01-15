let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sommaDispari = 0;

for (let i = 0; i < numeri.length; i++) {
    if (i % 2 !== 0) {  
        sommaDispari += numeri[i];
    }
}

console.log("La somma degli elementi in posizione dispari è:", sommaDispari);
