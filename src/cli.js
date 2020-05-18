
// retornar un array de los archivos md
// fs.readdirSync lee el contenido de un directorio - síncrono
// const searchPathFiles = ((route) => {
//   let arrayFilesMd = [];
//   const filePath = converPath(route);
//   if (validateFile(filePath)) {
//     if (fileMd(filePath)) {
//       arrayFilesMd.push(filePath);
//     }
//   } else {
//     const filesOfDirectory = fs.readdirSync(filePath);
//     for (let i = 0; i < filesOfDirectory.length; i += 1) {
//       const newFileOfDirectory = searchPathFiles(path.join(filePath, filesOfDirectory[i]));
//       arrayFilesMd = arrayFilesMd.concat(newFileOfDirectory);
//     }
//   }
//   return arrayFilesMd;
// });


// otro
// const saveMdFile = (route) => {
//   if (validateDirectory) {
//     const arrDataFiles = fs.readdirSync(route);// guarda en [] el contenido(archivo y directorio) de la ruta
//     const pathData = arrDataFiles.reduce((arrTotalPaths, currentFilePaths) => {
//   const absolutePaths = path.resolve(route, currentFilePaths);
//   const pathsArr = saveMdFile(absolutePaths);
//   return arrTotalPaths.concat(pathsArr);
// }, []);
// return allDataPaths;
//   }
// const filePath = converPath(route);
// if (fileMd(filePath)) {
//   return [filePath];
// }
// return [];

// funcion recursiva


// otro ejemplo de recursividad y la otra funcion que busca links
// const isAbsolute = (route) => (path.isAbsolute(route));
// const convertToAbsolute = (route) => path.resolve(route);
// const getPaths = (route) => fs.readdirSync(route).map((file) => path.resolve(route, file));
// const isMd = (fileMd) => path.extname(fileMd) === '.md';
// const isFile = (file) => fs.statSync(file).isFile();
// const readFile = (file) => fs.readFileSync(file, 'utf8');
// const searchMdFiles = (route) => {
//   let arrayMd = [];
//   if (isFile(route)) {
//     if (isMd(route)) {
//       arrayMd = arrayMd.concat(route);
//       return arrayMd;
//     }
//     return [];
//   }
//   getPaths(route).forEach((elemento) => {
//     arrayMd = arrayMd.concat(searchMdFiles(elemento));
//   });
//   return arrayMd;
// };
// const getLinks = (route) => {
//   const renderer = new marked.Renderer();
//   const links = [];
//   searchMdFiles(route).forEach((file) => {
//     renderer.link = (href, title, text) => {
//       links.push({ href, text, file });
//     };
//     marked(readFile(file), { renderer });
//   });
//   return links;
// };


//* // const saveRoutesOfFiles = (route) => {
//   let allFiles = [];
//   if (isFile(route) && isMD(route)) {
//     allFiles.push(route);
//   }
//   if (isDirectory(route)) {
//     const getDirectoryContent = readDirectory(route);
//     getDirectoryContent.forEach((Element) => {
//       const rutaAbsoluta = path.join(route, Element);
//       allFiles = allFiles.concat(saveRoutesOfFiles(rutaAbsoluta));
//     });
//   }
//   return allFiles;
// };

// console.log(extraerArchivos('test'));
