// lib/translate.ts
const dictionary: Record<string, string> = {
  technology: "ٹیکنالوجی",
  future: "مستقبل",
  education: "تعلیم",
  world: "دنیا",
  // ...expand as needed
};

export function translateToUrdu(text: string): string {
  return text
    .split(" ")
    .map(word => dictionary[word.toLowerCase()] || word)
    .join(" ");
}
