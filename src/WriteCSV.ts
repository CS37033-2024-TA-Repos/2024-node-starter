import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

interface CsvData {
    headers: { id: string, title: string }[];
    data: any[];
}

async function createCsvFile(data: CsvData, path: string) {
    const csvWriter = createCsvWriter({
        path: path,
        header: data.headers,
    });

    await csvWriter.writeRecords(data.data);
    console.log(`CSV file written to ${path}`);
}

