import getParagraphs from "./getParagraphs"

const threeParagraphs = "Первый абзац\nВторой абзац\nТретий абзац";
const oneParagraphs = "Первый абзац";
const zeroLenght = "";

test("Текст с n абзацами", () => {
  expect(getParagraphs(threeParagraphs).length).toBe(3);
  expect(getParagraphs(threeParagraphs)[2]).toBe("Третий абзац");
});

test("Текст с 1 абзацем", () => {
  expect(getParagraphs(oneParagraphs).length).toBe(1);
  expect(getParagraphs(oneParagraphs)[0]).toBe("Первый абзац");
});

test("Текст 0 длины", () => {
  expect(getParagraphs(zeroLenght).length).toBe(1);
  expect(getParagraphs(zeroLenght)[0]).toBe("");
});