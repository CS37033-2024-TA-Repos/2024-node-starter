import { PrismaClient } from "../.prisma/client";
import readCSVFile from "./Readcsv";
import createCSVFile from "./WriteCSV";

const prisma = new PrismaClient();

const edges = readCSVFile("L1Edges.csv");
const nodes = readCSVFile("L1Nodes.csv");

console.log();
console.log("Edges CSV File");
for (let i = 0; i < edges.length; i++) {
  for (let j = 0; j < edges[i].length; j++) {
    process.stdout.write(edges[i][j] + "\t");
  }
  console.log();
}

console.log();
console.log("\nNodes CSV File");

for (let i = 0; i < nodes.length; i++) {
  for (let j = 0; j < nodes[i].length; j++) {
    process.stdout.write(nodes[i][j] + "\t");
  }
  console.log();
}
const edgeData = {
  headers: [
    { id: "startNodeID", title: "startNodeID" },
    { id: "endNodeID", title: "endNodeID" },
  ],
  data: [{ id: 1, startNodeID: "CCONF002L1", endNodeID: "WELEV00HL1" }],
};
createCSVFile(edgeData, "csv_data/edgeTest.csv");

const nodeData = {
  headers: [
    { id: "nodeID", title: "nodeID" },
    { id: "xcoord", title: "xcoord" },
    { id: "ycoord", title: "ycoord" },
    { id: "floor", title: "floor" },
    { id: "building", title: "building" },
    { id: "nodeType", title: "nodeType" },
    { id: "longName", title: "longName" },
    { id: "shortName", title: "shortName" },
  ],
  data: [
    {
      id: 1,
      nodeID: "CCONF001L1",
      xcoord: 2255,
      ycoord: 849,
      floor: "L1",
      building: "45 Francis",
      nodeType: "CONF",
      longName: "Anesthesia Conf Floor L1",
      shortName: "Conf C001L1",
    },
  ],
};
createCSVFile(nodeData, "csv_data/nodeTest.csv");
