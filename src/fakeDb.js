const fs = require("fs");
const {Observable} = require("rxjs");

const readFile = Observable.bindNodeCallback(fs.readFile);

module.exports = function () {
  let db;
  readFile(`./resources/data.json`, 'utf8')
    .map(json => JSON.parse(json))
    .subscribe(ans => db = ans, console.error, () => console.log("data has been loaded"));

  const findByIdNumber = (idNumber) => {
    return db[idNumber];
  };
  
  return {findByIdNumber}
}();