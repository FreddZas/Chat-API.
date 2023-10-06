const sum = require('../sum');

test('La suma de 4 y 5 debe dar 9', () => {
    // Arrange
    const a = 4;
    const b = 5;
    // Act
    const result = sum(a, b);
    // Assert
    expect(result).toBe(9);
});

test("La suma de un string '10' y 15 debe dar undefined", () => {
    //Arrange
    const a ='10';
    const b = 15;
    //Act
    const result = sum(a, b)
    //Assert
    expect(result).toBeUndefined();
});

test("Si se manda uno o todos los parametros vacios deberian devolver un error", () => {
    //Arrange
    const a = null;
    const b = 7;
    //Act
    const result = sum(a, b)
    //Assert
    expect(result).toBeNull();
});

