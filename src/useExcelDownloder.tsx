import React from 'react';
import XLSX from 'xlsx';

function useExcelDownloderComponent(api: any) {
  const ExcelDownloder = React.useMemo(
    () =>
      (props: any) => {
        const { setData, data } = ExcelDownloder.api;

        React.useEffect(() => {
          setData(props.data);
        }, []);

        const download = () => {
          // Make Workbook of excel
          let wb = XLSX.utils.book_new();

          for(const key in data) {
            // Export json to Worksheet of Excel ( only array possible )
            let jsonToSheet = XLSX.utils.json_to_sheet(data[key]);
            // Add Worksheet to Workbook ( workbook contains one or more worksheets )
            XLSX.utils.book_append_sheet(wb, jsonToSheet, key);
          }

          // Export excel file
          XLSX.writeFile(wb, 'book.xlsx');
        };

        return <button onClick={() => download()}>{props.children}</button>;
      },
    []
  ) as any;

  ExcelDownloder.api = api;

  return ExcelDownloder;
}

export function useExcelDownloder() {
  const [data, setData] = React.useState({});
  const api = {
    data,
    setData,
  };

  const ExcelDownloder = useExcelDownloderComponent(api);

  return {
    ...api,
    ExcelDownloder,
  };
}
