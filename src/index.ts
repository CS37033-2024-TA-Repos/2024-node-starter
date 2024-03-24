import { PrismaClient } from "../.prisma/client";
import readCSVFile from "./Readcsv";
const prisma = new PrismaClient()

// prisma.example.create({
//     data:{
//         text:"test"
//     }
// })
const edges = readCSVFile('L1Edges.csv');
const nodes = readCSVFile('L1Nodes.csv');
