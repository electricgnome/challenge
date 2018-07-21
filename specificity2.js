function compare(a, b) {
    var aCount =separate(a);
    var bCount =separate(b);

    console.log('a: '+ aCount);
    console.log('b: '+ bCount);


}

function separate(input) {
  var selectors,
    selector,
    results = [];

  selectors = input.split(" ");

  for (let i = 0; i < selectors.length; i += 1) {
    selector = selectors[i];
    if (selector.length > 0) {
      results.push(calculate(selector));
    }
  }

  return results;
}

function isStar (str) {
  return str === '*'
}

console.assert(isStar('*'))
console.assert(!isStar('*div'))
console.assert(!isStar('*#foo'))

function isTag (str) {
  return str !== '' && !(/[^a-z]/.test(str))
}

console.assert(isTag('div'))
console.assert(isTag('body'))
console.assert(!isTag('.foo'))
console.assert(!isTag('div#foo'))
console.assert(!isTag('div.class'))
console.assert(!isTag('*'))
console.assert(!isTag(''))

function calculate(input) {
  var count,
    tags,
    idReg = /(#[^\#\s\+>~\.\[:]+)/g,
    classReg = /(\.[^\s\+>~\.\[:]+)/g,
    tagReg = /([^\s\+>~\.\[:]+)/g;

    console.log('id: '+ input.match(idReg).length);
    console.log('clas: '+ input.match(classReg).length);
    // console.log('tag: '+ input.match(tagReg).length);

    if(input.charAt(0) !== ('.') && input.charAt(0) !== ('#')){
        tags =input.match(tagReg).length
        console.log('tag: ' + tags)
    }else {
        tags =0;
    }

  count =
    input.match(idReg).length * 100 + input.match(classReg).length * 10 + tags;
  return count;
}

compare("body p some.cl .bl #id", "div.cl #qw");

