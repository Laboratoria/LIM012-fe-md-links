// path-> modulo que proporciona utilidades para trabajar con rutas de archivos y directorios .
// fs-> modulo que proporciona una API para interacuar con el sistema de archivos
// marked-> permite analizar markdown en HTML y leer los links
// fetch -> modulo liviano que trae Windows.fetch API a node
const fs = require('fs');
const path = require('path');
const marked = require('marked');

// isAbsolute -> devuelve verdadero si es una ruta Absoluta
const converPath = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));
// console.log(converPath('./test'));
// validar si es un archivo
const isValidateFile = (ruta) => fs.statSync(ruta).isFile();
// validar si es un directorio existe -> true or false
// console.log(validateFile('./src/api.js'));
const isValidateDirectory = (ruta) => fs.statSync(ruta).isDirectory();
// console.log(validateDirectory('./test'));
// validar si ess archivo con extension .md // extname obtiene la extension de una ruta de archivo
const isFileMd = (ruta) => (path.extname(ruta) === '.md');
// console.log(isFileMd('./test/prueba/directorio1/archivo1.md'));
// lee el directorio // fs.readdir ->Lee el contenido de un directorio.
const readDirectory = (ruta) => fs.readdirSync(ruta, 'utf-8');
// console.log(readDirectory('test'));


const extraerArchivos = (route) => {
  // console.log(route);
  let arrFiles = [];
  readDirectory(route).forEach((file) => {
    const rutaCompleta = path.join(route, file);
    // console.log(rutaCompleta);
    if (isValidateDirectory(rutaCompleta)) {
      // console.log(`${rutaCompleta} es un directorio`);
      arrFiles = arrFiles.concat(extraerArchivos(rutaCompleta));
    } else if (isFileMd(rutaCompleta)) {
      arrFiles.push(rutaCompleta);
    }
  });
  // console.log(arrFiles);
  return arrFiles;
};

console.log(extraerArchivos('./test'));


// console.log(arrFiles);
