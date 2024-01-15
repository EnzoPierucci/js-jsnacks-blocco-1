let N = parseInt(prompt("Inserisci un numero:"));

if (!isNaN(N)) {
    console.log("I cubi dei primi", N, "numeri sono:");

    for (let i = 1; i <= N; i++) {
        let cubo = i ** 3;
        console.log("Il cubo di", i, "è", cubo);
    }
} else {
    console.log("Inserisci un numero valido.");
}
