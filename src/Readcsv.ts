import fs from "fs";

function readCSVFile(filePath: string): string[][] {
    try {
        const data = fs.readFileSync(filePath, "utf-8")
        return data
            .split('\r\n')
            .slice(1,-1) // Remove the first row and the last row
            .map(row => row.split(','));
    }
    catch (err) {
        console.error(err);
        return [[]]
    }
}
export default readCSVFile;
