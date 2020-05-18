const { isAbsolute } = require('path');
const { converPath } = require('../src/api');

describe('pruebas de path', () => {
  it('deberia convertir a ruta absoluta', () => {
    const ouput = converPath('.');
    expect(isAbsolute(ouput)).toBe(true);
  });
  it('deberia devolver la misma ruta', () => {
    const input = process.cwd();
    const ouput = converPath(input);
    expect(ouput).toEqual(input);
  });
});
