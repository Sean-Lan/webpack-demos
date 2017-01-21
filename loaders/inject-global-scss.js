module.exports = function(source) {
  this.cacheable();
  return `@import 'global';
    ${source}`;
};
