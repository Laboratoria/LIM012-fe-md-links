// const pathNode = require('path');
const {
  converPath,
  // isvalidateDirectory,
  extractorFilesMd,
  validateLinks,
  extractLinks,
  getAllLinks,
} = require('./utils');

const mdLinks1 = (path, options = { validate: false }) => {
  const newPathAbsolute = converPath(path);
  if (!newPathAbsolute) return;
  const arrLinks = getAllLinks(newPathAbsolute);
  if (options.validate) {
    validateLinks(arrLinks).then((resp) => {
      // resp.forEach((el) => {
      console.log(resp);
      // });
    });
    // return validateLinks(arrLinks);
    // console.log('valido');
  }
};

// const mdLinks = (path, options) => {
//   let newPathAbsolute;
//   if (!pathNode.isAbsolute(path)) {
//     newPathAbsolute = pathNode.resolve(path);
//   } else if (options.validate) {
//     return validateLinks(newPathAbsolute);
//   }
//   return Promise.all(getAllLinks(newPathAbsolute));
// };
// console.log(mdLinks('./test'));

// mdLinks('./test')
//   .then((links) => {
//     [{ href, text, file }];
//   })
//   .catch(console.error);
module.exports = { mdLinks1 };

// [...arr1, ...arr2];
