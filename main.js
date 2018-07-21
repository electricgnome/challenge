function markdownParser(markdown) {
  var count = (markdown.match(/#/g) || []).length;
  var spacer = markdown.match(/# /g) || [];
  var doubles = (markdown.match(/# #/g) || []).length;
  if (count > 6 || spacer == "" || markdown.trim().charAt(0) != "#") {
    return markdown;
  } else if (doubles == 1) {
    count = markdown.lastIndexOf("# #") + 1;
    markdown =
      markdown.slice(count, count + 1) +
      markdown.slice(count + 1, markdown.length);
    return `<h${count}>${markdown.trim()}</h${count}>`;
  } else {
    markdown =
      markdown.slice(count, count + 1) +
      markdown.slice(count + 1, markdown.length);
    return `<h${count}>${markdown.trim()}</h${count}>`;
  }
}


function compare(a,b){
    // do your own comparison
    var aSpec = [0,0,0];
    var bSpec = [0,0,0];
    for (let i=0; i< a.length; i++){
      if (a[i] == '.'){
        aSpec[1] += 1
      }else if (a[i] == '#'){
        aSpec[0] += 1
      }
    }
    for (let i=0; i< b.length; i++){
      if (b[i] == '.'){
        bSpec[1] += 1
      }else if (b[i] == '#'){
        bSpec[0] += 1
      }
    }
    for(let i=0 i< a.split(' ').length; i++){
      if (a )
    }  
   
    aSpec[2] = (a.match(/div/g) || a.match(/body/g) || a.match(/span/g) || a.match(/p /g) || a.match(/li/g) || []).length;
    bSpec[2] = (b.match(/div/g) || b.match(/body/g) || b.match(/span/g) || b.match(/p /g) || b.match(/li/g) || []).length;
    console.log("a Spec: "+ aSpec);
    console.log("b Spec: "+ bSpec);
    
    return b;
  }



		idRegex = /(#[^\#\s\+>~\.\[:]+)/g,
    classRegex = /(\.[^\s\+>~\.\[:]+)/g,
    
    test = / ^/g