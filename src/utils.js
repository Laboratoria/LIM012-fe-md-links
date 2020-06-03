// path-> modulo que proporciona utilidades para trabajar con rutas de archivos y directorios .
// .concat() une arrays, devolviendo un nueno array-> arr1.concat(arr2)
// fs-> modulo que proporciona una API para interacuar con el sistema de archivos
// marked-> permite analizar markdown en HTML y leer los links
// fetch -> modulo liviano que trae Windows.fetch API a node
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const jsdom = require('jsdom');
const fetch = require('node-fetch');

const { JSDOM } = jsdom;

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
// console.log(render);

// extraer los archivos con extension .md
const extractorFilesMd = (route) => {
  const pathAbsolute = converPath(route);
  let arrFilesMd = [];
  readDirectory(pathAbsolute).forEach((file) => { // recorremos el directorio
    const rutaCompleta = path.join(pathAbsolute, file); // unimos el directotio y archivo(test/api.tesr.js)
    if (isValidateDirectory(rutaCompleta)) { // si en el recorrido hay un directorio
      arrFilesMd = arrFilesMd.concat(extractorFilesMd(rutaCompleta));// volver a ejecutar la funcion de rutacompleta
    } else if (isValidateFile(rutaCompleta)) {
      if (isFileMd(rutaCompleta)) { // si es archivo .md
        arrFilesMd.push(rutaCompleta);
      } // pushear en arrFiles todos los archivos .md
    }
  });
  return arrFilesMd; // devuelve un array de la ruta completa
};
// extractorFilesMd('./test');
// console.log(extractorFilesMd('./test'));

// recorre el archivo .md , extraer links y guardar en un array

// recorrer el file .md y extraer las propiedades href, text y file
const extractLinks = (file) => {
  const arrLinks = [];
  const readFile = fs.readFileSync(file, 'utf-8');
  const mdHTML = marked(readFile);
  const dom = new JSDOM(mdHTML);
  dom.window.document.querySelectorAll('a').forEach((element) => {
    arrLinks.push({
      href: element.getAttribute('href'),
      text: element.textContent,
      path: file,
    });
  });
  return arrLinks;
};
// console.log(extractLinks('./test/prueba/directorio1/archivo1.md'));
// console.log(extractLinks('./test'));

// function que concatena la ruta completa con el array que links
const getAllLinks = (ruta) => {
  let allLinks = [];
  const filePaths = extractorFilesMd(ruta);// array de rutas absolutas con files .md
  filePaths.forEach((element) => { // por cada fileMd
    allLinks = allLinks.concat(extractLinks(element)); // unir el array de rutas de allLinks y extractLinks -> links de un filemd
  });
  return allLinks;
};
// console.log(getAllLinks('./test'));
// getAllLinks('./test');

const validateLinks = (ruta) => {
  const arrAllLinks = getAllLinks(ruta);
  const statusLinks = arrAllLinks.map((link) => fetch(link.href)
    .then((res) => ({
      href: link.href,
      text: link.text,
      path: link.path,
      status: res.status,
      statusText: res.statusText,
    })));
  // console.log(stado);
  // Promise.all(validate(getAllLinks('./test')));
  return Promise.all(statusLinks);
};

// validateLinks('./test').then((res) => console.log(res));

module.exports = {
  converPath,
  isValidateDirectory,
  extractorFilesMd,
  validateLinks,
  extractLinks,
  getAllLinks,
};
