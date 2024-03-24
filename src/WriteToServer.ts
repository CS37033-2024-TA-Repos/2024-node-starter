import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import csvParser from 'csv-parser';

const prisma = new PrismaClient();

async function importCsvToDatabase(filePath: string, model: 'Node' | 'NodeEdge') {
    const results: any[] = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            for (const row of results) {
                if (model === 'Node') {
                    await prisma.Node.create({
                        data: row,
                    });
                } else if (model === 'NodeEdge') {
                    await prisma.NodeEdge.create({
                        data: row,
                    });
                }
            }

            console.log(`Data import complete for ${model}`);
            await prisma.$disconnect();
        });
}
