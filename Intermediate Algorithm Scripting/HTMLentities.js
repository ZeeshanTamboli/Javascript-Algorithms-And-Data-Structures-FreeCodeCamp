// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '&':
        str = str.replace(str[i], '&amp;');
        break;
      case '<':
        str = str.replace(str[i], '&lt;');
        break;
      case '>':
        str = str.replace(str[i], '&gt;');
        break;
      case '"':
        str = str.replace(str[i], '&quot;');
        break;
      case "'":
        str = str.replace(str[i], '&​apos;'); // there is a hidden character 'dot' here in '&apos;', so remove it by going to 'https://stephengrider.github.io/JSPlaygrounds/' and then paste it in FCC editor
        break;
    }
  }
  return str;
}

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML('Sixty > twelve'));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML('<>'));
console.log(convertHTML('abc'));
