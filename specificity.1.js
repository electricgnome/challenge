// * tag .class #id  ::: tag.class, tag#id
function compare(a, b) {
  console.log(separate(a))
  console.log(separate(b))

  if (separate(a) > separate(b)){
    console.log(a)
    return a
  }else{
    console.log(b)
    return b
  }
}

function separate(input) {
  var selectors,
    selector,
    results=0;

  selectors = input.split(" ");

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
  if (isStar(str)) {
    return 0;
  } else if (isTag(str)) {
    count = 100;
  } else if (isClass(str)) {
    count = 1000;
  } else if (isId(str)) {
    count = 10000;
  } else if (isTagClass(str)) {
    count = 1100;
  } else if (isTagId(str)) {
    count = 10100;
  }
  return count;
}

function isStar(str) {
  return str === "*";
}

function isTag(str) {
  return str !== "" && !/[^a-zA-Z0-9\-]/.test(str);
}

function isClass(str) {
  return str !== "" && /\./.test(str.charAt(0));
}

function isId(str) {
  return str !== "" && /#/.test(str.charAt(0));
}

function isTagClass(str) {
  return (
    
    str.split(".").length >= 2 
    // str.split(".")[0].length &&
    // str.split(".")[1].length !== 0
  );
}

function isTagId(str) {
  return (
    str.split("#").length === 2 &&
    str.split("#")[0].length &&
    str.split("#")[1].length !== 0
  );
}

compare(".box.box-first", ".red");

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
