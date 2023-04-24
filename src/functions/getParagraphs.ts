export function getParagraphs(text: string): string[] {
  let paragraph = "";
  let paragraphs = new Array<string>;
  for (let char of text) {
    if (char === "\n") {
      if (paragraph.length > 0) {
        paragraphs.push(paragraph);
        paragraph = "";
      }
      continue;
    }
    paragraph += char;
  }
  paragraphs.push(paragraph);
  return paragraphs;
}