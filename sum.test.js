const somme = require('./sum');


// Tests de la fonction somme
test('Ajoute 5 + 7 pour obtenir 12', () => {
    expect(somme(5, 7)).toBe(12);
});

test('Ajoute 0 + 0 pour obtenir 0', () => {
    expect(somme(0, 0)).toBe(0);
});

test('Ajoute -5 + 5 pour obtenir 0', () => {
    expect(somme(-5, 5)).toBe(0);
});

test('Ajoute -3 + -7 pour obtenir -10', () => {
    expect(somme(-3, -7)).toBe(-10);
});

/*
test('Ajoute 15 + 5 pour obtenir 21', () => {
    expect(somme(15, 5)).toBe(21);
});*/