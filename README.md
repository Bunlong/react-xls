# react-xls

react-xls is the fastest in-browser excel ( .xls & .xlsx ) parser for React.

[![NPM](https://img.shields.io/npm/v/react-xls.svg)](https://www.npmjs.com/package/react-xls) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-xls) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Compatible with both JavaScript and TypeScript

## 📚 Useful Features

* [useExcelDownloader](https://github.com/bunlong/react-xls#-useexceldownloader) – React hook that render the link/button which is clicked to download the data provided in excel file.

## 🔧 Install

react-xls is available on npm. It can be installed with the following command:

```
npm install react-xls --save
```

react-xls is available on yarn as well. It can be installed with the following command:

```
yarn add react-xls --save
```

## 💡 Usage

### 🎀 useExcelDownloader

#### 👨‍💻 Button

```js
import React from 'react';

import { useExcelDownloder } from 'react-xls';

function App() {
  const { ExcelDownloder, Type } = useExcelDownloder();

  // We will make a Workbook contains 2 Worksheets
  const data = {
    // Worksheet named animals
    animals: [
      { name: 'cat', category: 'animal' },
      { name: 'dog', category: 'animal' },
      { name: 'pig', category: 'animal' },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: 'pikachu', category: 'pokemon' },
      { name: 'Arbok', category: 'pokemon' },
      { name: 'Eevee', category: 'pokemon' },
    ],
  };

  return (
    <div>
      <ExcelDownloder
        data={data}
        filename={'book'}
        type={Type.Button} // or type={'button'}
      >
        Download
      </ExcelDownloder>
    </div>
  );
}

export default App;
```

#### 👨‍💻 Link

```js
import React from 'react';

import { useExcelDownloder } from 'react-xls';

function App() {
  const { ExcelDownloder, Type } = useExcelDownloder();

  // We will make a Workbook contains 2 Worksheets
  const data = {
    // Worksheet named animals
    animals: [
      { name: 'cat', category: 'animal' },
      { name: 'dog', category: 'animal' },
      { name: 'pig', category: 'animal' },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: 'pikachu', category: 'pokemon' },
      { name: 'Arbok', category: 'pokemon' },
      { name: 'Eevee', category: 'pokemon' },
    ],
  };

  return (
    <div>
      <ExcelDownloder
        data={data}
        filename={'book'}
        type={Type.Link} // or type={'link'}
      >
        Download
      </ExcelDownloder>
    </div>
  );
}

export default App;
```

#### 📖 useExcelDownloder Returned Object

| Object Properties | Description |
| :--- | :--- |
| ExcelDownloder | React component that render the link/button which is clicked to download the data provided in excel file. |
| Type | Constant object ( `Type.Line` && `Type.Button` ). |
| setData | Method that use to set data. |
| setFilename | Method that use to set filename. |
| setStyle | Method that use to set style. |
| setClassName | Method that use to set className. |

#### 📖 ExcelDownloder props

| Props | Type | Default | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| children | node |  | React component, HTML element or string. | ✅ |
| data | object |  | Downloaded data. | ✅ |
| filename | string |  | Filename ( `.xlsx` extension is automatically added ). | ✅ |
| type | string | 'link' |  If 'button', render button. | ❌ |
| style | object | {} | Inline style. | ❌ |
| className | string | '' | className | ❌ |

## 📜 Changelog

Latest version 0.1.0 (2021-08-15):

  * Add useExcelDownloader

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/react-xls/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `react-xls` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `react-xls` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
