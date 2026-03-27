import XLSX from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const Excel_File_Path = path.resolve(
  _dirname,
  "../testData/Team08_PlaywrightPirates_TestData.xlsx",
);

export function getData(sheetName, scenarioName) {
  const workbook = XLSX.readFile(Excel_File_Path);

  if (!workbook.SheetNames.includes(sheetName)) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  const sheet = workbook.Sheets[sheetName];
  const allRows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

  const matchingRows = allRows.filter(
    (row) => row["testcase"]?.toString().trim() === scenarioName.trim(),
  );

  if (matchingRows.length === 0) {
    console.warn(`No data found for the scenario`);
  }
  //return matchingRows[0];
  return matchingRows;
}
