import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

function decodedData(encoded) {
  const decoded = [];

  for (const dataEl of encoded) {
    const res = {};
    for (const el in dataEl) {
      if (el.includes('Id') && el !== 'groupId' && el !== "service" && el !== "formatSize" && el !== "ca" && dataEl[el]) {
        res[el] = translations[dataEl[el]];
      } else {
        res[el] = dataEl[el];
      }
    }

    decoded.push(res);
  } 

  return decoded;
}
const decoded = decodedData(encoded);

console.log(decoded)