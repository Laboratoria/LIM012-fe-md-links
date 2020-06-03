#!/usr/bin/env node
const { mdLinks } = require('./mdLinks');

mdLinks('./test', { validate: true })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

// funcion para extraer las 3 propiedades del link en string
const optionPath = (arrLinks) => {
  stringPath = '';
  arrLinks.forEach((link) => {
    stringPath += `${link.path} ${link.href} ${link.text}\n`;
  });
  return stringPath;
};

// funcion que retorna total y unique
const totalUnique = (arrLinks) => {
  const unique = arrLinks.map((element) => element.href);
  return `total: ${arrLinks.length}\nunique: ${new Set(unique).size}`;
};


// funcion validate y status
const validateStatus = (arrLinks) => {
  const totalUniqueLinks = totalUnique(arrLinks);
  const brokenLinks = arrLinks.filter(((link) => link.statusText === 'Not Found'));
  return `${totalUniqueLinks}\nbroken: ${brokenLinks.length}`;
};

// funcion que devuelve las 5 propiedades del link en string
const validateOption = (arrLinks) => {
  let stringValidate = '';
  arrLinks.forEach((link) => {
    stringValidate += `${link.path} ${link.href} ${link.statusText} ${link.status} ${link.text}\n`;
  });
  return stringValidate;
};

const optionCli = (path, option, stats) => {
  if ((option === '--stats' && stats === '--validate') || (option === '--validate' && stats === '--stats')) {
    return mdLinks(path, { validate: true })
      .then((links) => {
        if (links.length === 0) {
          console.log('no se encontraron links');
        } else {
          validateStatus(links);
        }
      })
      .catch(console.error);
  } if (option === '--validate') {
    return mdLinks(path, { validate: true })
      .then((links) => {
        if (links.length === 0) {
          console.log('no se encontraron links');
        } else {
          validateOption(links);
        }
      })
      .catch(console.error);
  } if (option === '--stats') {
    return mdLinks(path, { validate: true })
      .then((links) => {
        if (links.length === 0) {
          console.log('no se encontraron links');
        } else {
          totalUnique(links);
        }
      })
      .catch(console.error);
  } if (option === undefined && stats === undefined) {
    return mdLinks(path)
      .then((links) => {
        if (links.length === 0) {
          console.log('no se encontraron links');
        } else {
          optionPath(links);
        }
      })
      .catch(console.error);
  }
};


// optionCli('./test').then((arrL) => { console.log(arrL); });


const path = process.argv[2];
// const option = process.argv[3];
// const stats = process.argv[4];
// console.log(path);
// console.log(path);
// console.log(option);
// console.log(stats);
