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


