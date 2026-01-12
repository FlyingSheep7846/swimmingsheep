import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    res.status(200).json(response.results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}