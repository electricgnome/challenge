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


function markdownParser (markdown) {
  var count =(markdown.match(/#/g)|| []).length;
  var spacer =(markdown.match(/# /g)|| [])
  var doubles =(markdown.match(/# #/g)|| []).length;
  if (count >6 && doubles ==0 || spacer =='' || markdown.trim().charAt(0) !='#'){
    return markdown;
  }else if (doubles ==1){
    count = markdown.lastIndexOf('# #')+1;
//     markdown= markdown.slice(count, count+1) + markdown.slice(count+1, markdown.length);
    markdown = markdown.replace(/#/g,'')
    return `<h${count}>${markdown.trim()}</h${count}>`;
  }else{
  markdown= markdown.slice(count, count+1) + markdown.slice(count+1, markdown.length);
  return `<h${count}>${markdown.trim()}</h${count}>`;
  }
}