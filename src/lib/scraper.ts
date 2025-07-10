// lib/scraper.ts
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeBlogText(url: string): Promise<string> {
  const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/summarise';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const text = $('article, p').text();
  return text.replace(/\s+/g, ' ').trim();
}
