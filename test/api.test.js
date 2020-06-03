const { isAbsolute } = require('path');
const { mdLinks } = require('../src/mdLinks');
const {
  converPath,
  extractorFilesMd,
  extractLinks,
  // getAllLinks,
} = require('../src/utils');

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

describe('test extractorFileMd', () => {
  it('deberia retornar el/los archivos .md', () => {
    const ouputFilesMd = [
      '/mnt/d/ALME/Laboratoria/track-Fe/LIM012-fe-md-links/test/prueba/directorio1/archivo1.md',
      '/mnt/d/ALME/Laboratoria/track-Fe/LIM012-fe-md-links/test/prueba/directorio1/archivo5.md',
      '/mnt/d/ALME/Laboratoria/track-Fe/LIM012-fe-md-links/test/prueba/directorio1/directorio2/directorio3/archivo2.md',
      '/mnt/d/ALME/Laboratoria/track-Fe/LIM012-fe-md-links/test/prueba/directorio1/directorio2/directorio3/archivo3.md',
    ];
    expect(extractorFilesMd('./test')).toEqual(ouputFilesMd);
  });
});

describe('test para stractLinks', () => {
  test('deberia retornar un array de objetos con las 3 propiedades', () => {
    const ouput = [
      {
        href: 'https://github.com/markedjs/marked',
        text: 'Github',
        path: './test/prueba/directorio1/archivo1.md',
      },
    ];
    expect(extractLinks('./test/prueba/directorio1/archivo1.md')).toEqual(ouput);
  });
});


const ouput = [
  {
    href: 'https://github.com/AlmeAld',
    text: 'Alme',
    path: '/mnt/d/ALME/Laboratoria/track-Fe/LIM012-fe-md-links/test/prueba/directorio1/directorio2/directorio3/archivo2.md',
  },
  {
    href: 'https://classroom.udacity.com/courses/ud001/lessons/6987421963/concepts/74229205940923',
    text: 'Udacity',
    path: '/mnt/d/ALME/Laboratoria/track-Fe/LIM012-fe-md-links/test/prueba/directorio1/directorio2/directorio3/archivo3.md',
  },
];

// mdlinks;
describe('test para mdLinks', () => {
  test('deberia devolver un array de objetos con las 3 propiedades', () => expect(mdLinks('./test/prueba/directorio1/directorio2/directorio3/', { validate: false })).resolves.toEqual(ouput));
});
