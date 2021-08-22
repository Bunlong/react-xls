import XLSX from 'xlsx';

export function useFile() {
  return {
    readFile: XLSX.readFile,
  };
}
