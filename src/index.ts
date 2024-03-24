import { PrismaClient } from "../.prisma/client";
import readCSVFile from "./Readcsv";
const prisma = new PrismaClient()


const edges = readCSVFile('L1Edges.csv');
const nodes = readCSVFile('L1Nodes.csv');

console.log();
console.log("Edges CSV File")
for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < edges[i].length; j++) {
        process.stdout.write(edges[i][j] + "\t");
    }
    console.log();
}

console.log();
console.log("\nNodes CSV File")

for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes[i].length; j++) {
        process.stdout.write(nodes[i][j] + "\t");
    }
    console.log();
}
