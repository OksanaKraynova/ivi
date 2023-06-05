const months: string[] = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
];

export default function getDate(date: string): string {

  return date
    .slice(0, 10)
    .split("-")
    .reverse()
    .map((item, index) => index === 1 ? months[+item - 1] : +item)
    .join(" ");
}