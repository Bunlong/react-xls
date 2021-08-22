import XLSX from 'xlsx';

export function useSheetTo() {
  return {
    sheet_to_csv: XLSX.utils.sheet_to_csv,
    sheet_to_txt: XLSX.utils.sheet_to_txt,
    sheet_to_html: XLSX.utils.sheet_to_html,
    sheet_to_json: XLSX.utils.sheet_to_json,
    sheet_to_formulae: XLSX.utils.sheet_to_formulae,
  };
}
