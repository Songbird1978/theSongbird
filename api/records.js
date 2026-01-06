import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "GET") {
        try {
            const records = await prisma.record.findMany({
                include: {
                    artist: true,
                },
                orderBy: { createdAt: "asc" },
            });
            return res.status(200).json(records);
        } catch (error) {
            console.error("Database Error", error);
            return res.status(500).json({ error: "Failed to fetch records" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
