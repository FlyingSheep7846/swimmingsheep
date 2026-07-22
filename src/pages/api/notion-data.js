import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATA_SOURCE_ID,

      filter: {
        property: "Active",
        checkbox: {
          equals: true,
        },
      },

      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });

    res.status(200).json(response.results);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
}