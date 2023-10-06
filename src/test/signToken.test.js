// Pruebas para verificar que la funcion signAuthToken me genere un jwt cuando le pasamos la info

const {signAuthToken} = require('../helpers/signToken');

test('La funcion deberia regresar un token cuando le pasamos la data', () => {
    const data = { id: 3};

    const result = signAuthToken(data);
    expect(result).toMatch(/^[a-zA-Z_$][0-9a-zA-Z_$]*$/);
});