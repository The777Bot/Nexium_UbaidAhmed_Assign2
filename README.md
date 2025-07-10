# Blog Summarizer App

This project is a **Next.js** web application that allows users to input a blog URL and receive a summary in both English and Urdu. It demonstrates modern React/Next.js UI practices and integrates with **n8n** for backend automation and summarization.

---

## Features
- Enter any blog/article URL and get a summary in English and Urdu
- Clean, modern UI with reusable components (Input, Button, Card, Tabs, Textarea)
- Integrates with [n8n](https://n8n.io/) for workflow automation
- Easily extensible for more features or languages

---

## How It Works
1. User enters a blog URL and clicks **Summarise**
2. The app sends the URL to an n8n webhook
3. n8n fetches the blog content, extracts the main text, and returns a summary in both English and Urdu
4. The app displays the summaries in a tabbed interface

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Set Up n8n
- Install and run n8n locally (`npm install -g n8n` and `n8n start`) or use [n8n cloud](https://n8n.io/cloud)
- Create a workflow with:
  - **Webhook** node (POST, path: `summarise`)
  - **HTTP Request** node (GET, URL: `{{ $json["body"]["url"] }}`)
  - **HTML Extract** node (extracts `<p>` tags)
  - **Code** node (returns `{ en, ur }` summary)
- Set the Webhook node to return the output of the last node
- Activate the workflow

### 4. Configure the Webhook URL
- In `src/components/BlogForm.tsx`, set:
  ```js
  const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/summarise';
  ```

---

## Example Usage
1. Enter a blog URL (e.g., `https://quotes.toscrape.com/`)
2. Click **Summarise**
3. View the English and Urdu summaries returned by n8n

---

## Customization & Deployment
- You can extend the workflow to use AI summarization, email results, or save to a database
- Deploy the app to [Vercel](https://vercel.com/) or your preferred platform
- Deploy n8n to your own server or use n8n cloud

---

## Credits
- Built with [Next.js](https://nextjs.org/)
- Automation powered by [n8n](https://n8n.io/)

---

## License
MIT
