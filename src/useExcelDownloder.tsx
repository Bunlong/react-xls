import React from 'react';
import XLSX from 'xlsx';

const Type = {
  Link: 'link',
  Button: 'button',
} as const; 

export interface Api {
  data: any;
  setData?: () => void;
  filename: string;
  setFilename?: () => void;
  type: string;
  setType: () => void;
  style?: any;
  setStyle?: () => void;
  className?: any;
  setClassName?: () => void;
}

export interface Props {
  children: React.ReactNode;
  data: any;
  filename: string;
  type?: string;
  style?: any;
  className?: string;
}

function useExcelDownloderComponent(api: Api) {
  const ExcelDownloder = React.useMemo(
    () => (props: Props) => {
      const {
        setData,
        data,
        setFilename,
        filename,
        setType,
        type,
        setStyle,
        style,
        className,
        setClassName,
      } = ExcelDownloder.api;

      React.useEffect(() => {
        setData(props.data);
        setFilename(props.filename);
        props.type && setType(props.type);
        props.style && setStyle(props.style);
        props.className && setClassName(props.className);
      }, []);

      const download = () => {
        // Make Workbook of excel
        let wb = XLSX.utils.book_new();

        for (const key in data) {
          // Export json to Worksheet of Excel ( only array possible )
          let jsonToSheet = XLSX.utils.json_to_sheet(data[key]);
          // Add Worksheet to Workbook ( workbook contains one or more worksheets )
          XLSX.utils.book_append_sheet(wb, jsonToSheet, key);
        }

        // Export excel file
        XLSX.writeFile(wb, `${filename}.xlsx`);
      };

      return (
        <>
          {type === Type.Button ? (
            <button
              onClick={() => download()}
              style={style}
              className={className}
            >
              {props.children}
            </button>
          ) : (
            <a
              onClick={() => download()}
              style={style}
              className={className}
            >
              {props.children}
            </a>
          )}
        </>
      );
    },
    []
  ) as any;

  ExcelDownloder.api = api;

  return ExcelDownloder;
}

export function useExcelDownloder() {
  const [data, setData] = React.useState({});
  const [filename, setFilename] = React.useState({});
  const [type, setType] = React.useState(Type.Link);
  const [style, setStyle] = React.useState({});
  const [className, setClassName] = React.useState('');
  const api = {
    data,
    setData,
    filename,
    setFilename,
    type,
    setType,
    style,
    setStyle,
    className,
    setClassName,
  } as Api;

  const ExcelDownloder = useExcelDownloderComponent(api);

  return {
    ...api,
    ExcelDownloder,
    Type,
  };
}
