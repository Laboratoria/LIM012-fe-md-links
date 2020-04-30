const { suma } = require('../src/md-links');

// transformaBandera
describe('suma', () => {
  it('debe devolver la suma de a + b', () => {
    expect(suma(5, 3)).toBe(8);
  });
});
