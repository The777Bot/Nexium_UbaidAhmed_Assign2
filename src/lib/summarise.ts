// lib/summarise.ts
export function getSummary(text: string): string {
    return text.split('.').slice(0, 3).join('. ') + '.';
  }
  