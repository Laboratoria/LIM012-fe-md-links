// const pathNode = require('path');
const {
  converPath,
  validateLinks,
  getAllLinks,
} = require('./utils');

const mdLinks = (path, options) => new Promise((resolve) => {
  const newPathAbsolute = converPath(path);
  if (options !== undefined && options.validate) {
    resolve(validateLinks(path));
  }
  resolve(getAllLinks(newPathAbsolute));
});

module.exports = { mdLinks };
