import prisma from "../lib/prisma.js";



export default async function handler(req, res) {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
   

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "GET") {
        try {
            const design = await prisma.design.findMany();
            return res.status(200).json(design);
        } catch (error) {
            console.error("Database Error", error);
            console.log("DB URL exists", !!process.env.DATABASE_URL);
            return res.status(500).json({ error: "Failed to fetch designs" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
