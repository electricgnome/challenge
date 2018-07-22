// * tag .class #id  ::: tag.class, tag#id
function compare(a, b) {
  console.log(separate(a));
  console.log(separate(b));

  if (separate(a) > separate(b)) {
    console.log(a);
    return a;
  } else if (separate(a) <= separate(b)) {
    console.log(b);
    return b;
  }else {
    console.log("same")
    return b;
  }
}

function separate(input) {
  var selectors,
    selector,
    results = 0;

  selectors = input.split(" ");
  console.log("Selector: " + selectors);
  for (let i = 0; i < selectors.length; i += 1) {
    selector = selectors[i];
    if (selector.length > 0) {
      results += calculate(selector);
    }
  }

  return results;
}

function calculate(str) {
  var count = 0;
  count +=
    isStar(str) +
    isTag(str) +
    isClass(str) +
    isId(str) +
    isTagClass(str) +
    isTagId(str);
  return count;
}

function isStar(str) {
  if (str === "*") {
    //console.log("is Star");
    return 0;
  } else {
    return 0;
  }
}

function isTag(str) {
  if (str !== "" && !/[^a-zA-Z0-9\- ]/.test(str)) {
    console.log("is Tag");
    
    return (str.split(/ /)).length * 100;
  } else {
    return 0;
  }
}

function isClass(str) {
  if (
    str !== "" &&
    /\./.test(str.charAt(0)) &&
    (str.match(/\./g) || []).length == 1
  ) {
    //console.log("is class");

    return 1000;
  } else {
    return 0;
  }
}

function isId(str) {
  if (str !== "" && /#/.test(str.charAt(0))) {
    //console.log("is id");

    return (str.split(/ /)).length * 1000000;
  } else {
    return 0;
  }
}

function isTagClass(str) {
  if (!/\./.test(str.charAt(0)) && (str.match(/\./g) || []).length >= 1) {
    //console.log("is Tag Class");

    return (str.match(/\./g) || []).length * 1000 + 100;
  } else if (
    /\./.test(str.charAt(0)) &&(str.match(/\./g) || []).length > 1
  ) {
    return (str.match(/\./g) || []).length * 1000;
  } else {
    return 0;
  }
}

function isTagId(str) {
  if (!/#/.test(str.charAt(0)) && (str.match(/#/g) || []).length >= 1) {
    //console.log("is Tag ID");

    return (str.match(/#/g) || []).length * 1000000 + 100;
  } else if (
    /#/.test(str.charAt(0)) &&(str.match(/#/g) || []).length > 1
  ) {
    console.log((str.match(/#/g) || []).length)
    return (str.match(/#/g) || []).length * 1000100;
  } else {
    return 0;
  }
}



// function markdownParser (markdown) {
//   var count =(markdown.match(/#/g)|| []).length;
//   var spacer =(markdown.match(/# /g)|| [])
//   var doubles =(markdown.match(/# #/g)|| []).length;
//   if (count >6 && doubles ==0 || spacer =='' || markdown.trim().charAt(0) !='#'){
//     console.log(markdown)
//     return markdown;
//   }else if (doubles ==1){
//     count = markdown.lastIndexOf('# #')+1;
//     var new_markdown= markdown.slice(count, count+1) + markdown.slice(count+1, markdown.length);
//     if (new_markdown.match(/#/g).length == count){
//       console.log(`<h${count}>${new_markdown.trim()}</h${count}>`)
//       return `<h${count}>${new_markdown.trim()}</h${count}>`;
//     }else{

//     markdown = markdown.replace(/#/g,'')
//     console.log(`<h${count}>${markdown.trim()}</h${count}>`)

//     return `<h${count}>${markdown.trim()}</h${count}>`;
//   }
// }else{
//   markdown= markdown.slice(count, count+1) + markdown.slice(count+1, markdown.length);
//   console.log(`<h${count}>${markdown.trim()}</h${count}>`)

//   return `<h${count}>${markdown.trim()}</h${count}>`;
//   }
// }


function markdownParser (markdown) {
  var count =(markdown.match(/#/g)|| []).length;
  var spacer =(markdown.match(/# /g)|| [])
  var doubles =(markdown.match(/# #/g)|| []).length;
  markdown = markdown.trim()
  if (count >6 && doubles ==0 || spacer =='' || markdown.trim().charAt(0) !='#'){
    return markdown;
  }else if (doubles ==1){
    count = markdown.lastIndexOf('# #')+1;
    markdown= markdown.slice(count, count+1) + markdown.slice(count+1, markdown.length);
    // markdown = markdown.replace(/#/g,'')
    console.log(`<h${count}>${markdown.trim()}</h${count}>`)
    return `<h${count}>${markdown.trim()}</h${count}>`;
    
  }else{
  markdown= markdown.slice(count, count+1) + markdown.slice(count+1, markdown.length);
  console.log(`<h${count}>${markdown.trim()}</h${count}>`)

  return `<h${count}>${markdown.trim()}</h${count}>`;
  }
}

// const h1regex = /^# +/
// const h2regex = /^## +/
// const h3regex = /^### +/
// const h4regex = /^#### +/
// const h5regex = /^##### +/
// const h6regex = /^###### +/

// // NOTE: you could probably use an array here instead of 6 separate regex + conditions
// function parseLine (line) {
//   if (line.match(h1regex)) {
//     return line.replace(h1regex, '<h1>') + '</h1>'
//   }
//   if (line.match(h2regex)) {
//     return line.replace(h2regex, '<h2>') + '</h2>'
//   }
//   if (line.match(h3regex)) {
//     return line.replace(h3regex, '<h3>') + '</h3>'
//   }
//   if (line.match(h4regex)) {
//     return line.replace(h4regex, '<h4>') + '</h4>'
//   }
//   if (line.match(h5regex)) {
//     return line.replace(h4regex, '<h5>') + '</h5>'
//   }
//   if (line.match(h6regex)) {
//     return line.replace(h6regex, '<h6>') + '</h6>'
//   }

//   return line
// }

// function markdownParser (markdownTxt) {
//   const lines = markdownTxt.split('\n')
//   const parsedLines = lines.map(parseLine)
//   console.log(parsedLines.join('\n'))
//   return parsedLines.join('\n')
// }

markdownParser('   #### Space Jam')
markdownParser('### ### Double Triple Header')


// compare(".foo.bar", ".x .y"); //Expected weight: 2200 & 2000

// compare('ol.last.c0g6i6w5me9ljjhmpldi table.violet',  'a .violet .strong'); //1
// compare('div.item.strong',  'p .center'); //1
// compare('#dog div.strong.green.center.purple',  '.black #back .blue'); //1
// compare('div.black.white.last.orange',  '.center .yellow ul'); //1
// compare("p#an3wvbm0zsnknvpr2j4i i.orange div.yellow table.cqifvgaxcpi0ca3jtt9.red ul.strong", "#azn9rrm2mkatb92hp8pvi .purple div.strong");

// compare(".red.apple", ".red");
// compare(".box.box-first", ".box");
// compare("p.strong.cf6j8iobg8ve4gqfr div.center.violet", ".cjfnzhs9qbqvqxs9k9 u.violet");

// compare('.white b.red.first',  'i .purple strong');
// compare('ul.strong.white.green .center',  'span.cp46r7db89m6fmakbj4i span');

// compare('div.purple.last.cx9y03hfm1j4uowyaatt9 div.black .strong',  'span.purple .purple div.center.orange');

// compare('div.green.yellow.white.blue ul.first.blue a#bar p.violet.purple.last.cm73e653grqoqb4l8r529 div.green.center .purple div.cj6cfb0eco5j67xpqfr b.orange.orange.item ol#back span.blue.purple.orange b.yellow.black.c3to1c3idbyfrl01wcdi.yellow div#table table div#second span p .blue .strong',  '.item span#first p.purple.cxpko618ea6lsoe6ogvi.purple.item ol.orange div.first span#cat div i.blue.last span u.green i#list #fish div ol')
// compare('table.last.item.yellow .red .violet b.last.blue.blue.blue div.item.item .purple b#foo span#list div.cotiv7j2o5xtexxhia4i ul.white.first .orange div.red u.white.item.orange.purple a span.first.center.item',  'p#zvn8owwdam3einvzpvi #menu b p.blue .item p.orange.purple .blue .last ul.first.blue.orange .czjue97wtin3w6ei2j4i span.violet .ckoanewhqmytckutyb9 div table .white .center')

// console.assert(isStar("*"));
// console.assert(!isStar("*div"));
// console.assert(!isStar("*#foo"));

// console.assert(isTag("div"));
// console.assert(isTag("body"));
// console.assert(!isTag(".foo"));
// console.assert(!isTag("#foo"));
// console.assert(!isTag("div#foo"));
// console.assert(!isTag("div.class"));
// console.assert(!isTag("*"));
// console.assert(!isTag(""));

// console.assert(!isId("div"));
// console.assert(!isId("body"));
// console.assert(!isId(".foo"));
// console.assert(isId("#foo"));
// console.assert(!isId("div#foo"));
// console.assert(!isId("div.class"));
// console.assert(!isId("*"));
// console.assert(!isId(""));

// console.assert(!isClass("div"));
// console.assert(!isClass("body"));
// console.assert(isClass(".foo"));
// console.assert(!isClass("#foo"));
// console.assert(!isClass("div#foo"));
// console.assert(!isClass("div.class"));
// console.assert(!isClass("*"));
// console.assert(!isClass(""));

// console.assert(!isTagId("div"));
// console.assert(!isTagId("body"));
// console.assert(!isTagId(".foo"));
// console.assert(!isTagId("#foo"));
// console.assert(isTagId("div#foo"));
// console.assert(!isTagId("div.class"));
// console.assert(!isTagId("*"));
// console.assert(!isTagId(""));

// console.assert(!isTagClass("div"));
// console.assert(!isTagClass("body"));
// console.assert(!isTagClass(".foo"));
// console.assert(!isTagClass("#foo"));
// console.assert(!isTagClass("div#foo"));
// console.assert(isTagClass("div.class"));
// console.assert(!isTagClass("*"));
// console.assert(!isTagClass(""));


// function isTagId(str) {
//   if (
//     str.split("#").length === 2 &&
//     str.split("#")[0].length &&
//     str.split("#")[1].length !== 0
//   ) {
//     //console.log("is Tag ID");

//     return 1000100;
//   } else {
//     return 0;
//   }
// }

// function separate(input) {
//   var selectors,
//     selector,
//     results =[];

//   selectors = input.split(" ");
//   console.log("Selector: " + selectors);
//   for (let i = 0; i < selectors.length; i += 1) {
//     selector = selectors[i];
//     if (selector.length > 0) {
//       results.push((selector));
//     }
//   }

//   return results;
// }
