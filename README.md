# react

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square)](https://github.com/conventional-changelog/standard-version)

_新芽網路前端開發架構_

## 簡介

經由 `react-starter` 快速產生的專案，內建 `react` 開發用環境。

## 資源介紹

使用 `webpack` 做建置工具，專案架構使用 `universal-router`、`redux`，搭配 `eslint`、`react-storybook` 與 `jest` 開發，支援 `ES6`、`stage-3` 語法。

## 如何開始

- 安裝 nodejs v8 以上的版本
- 安裝套件: `npm i` or `yarn`

#### 踏出第一步

啟動開發 server

```
npm start
```

便可在 <http://localhost:3000> 看到本地伺服器～

啟動 storybook server

```
npm run storybook
```

便可在 <http://localhost:8000> 看到 storybook 開發伺服器～

#### npm script

- **npm start**: 啟動開發 server
- **npm run dev**: 跟 `npm start` 一樣
- **npm run demo**: 使用 `demo` 參數打包專案，部署在測試機。
- **npm run build**: 使用 `production` 參數打包專案，部署在正式機。
- **npm run lint**: 跑 eslint 跟 stylelint 檢查 coding style
- **npm run storybook**: 跑 storybook
- **npm test**: 跑 jest 測試

## 專案架構

此架構是參考 [Atom design](http://bradfrost.com/blog/post/atomic-web-design/) 和 [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) 所整理出來

> 註： atom design 裡的 Template 是這裡的 Layout，而 Page 則是在 routes 資料夾下

以下是這個專案的各資料夾定義
- src
	+ components
		- **atom**: 原子 component ，不可再分割的基本 component， ex `button`, `label`, `html tag`
		- **molecules**: 分子 component，由原子組成的基本 component， ex `地址輸入欄位` (包含 `label`, `input`, `button` 等)
		- **organisms**: 組織 component，由原子、分子組成的多功能 component， ex `header`, `footer`
	+ images
	+ **layouts**: 放置版型的地方，提供不同版型給許多頁面
	- **models**: 存放 reducer 和 action 的地方
	- **routes**: 定義每一頁的 routing 規則，底下每一個資料夾就是單獨一頁
	- **store**: 設定 redux middlewares 的地方
- **config**: 設定環境變數、調色盤、media query 範圍、endpoint 位置
- **storybook**: 存放 storybook 的設定檔

> 0.8.0 之後 component 的 stories 和 test case 移至各自的 component 資料夾裡面

## 參數設定

#### 環境變數

以下是 `npm run dev`, `npm run build:demo`, `npm run build` 各自對應的環境變數

| script         | NODE_ENV   | PROXY      | API        |
| -------------- | ---------- | ---------- | ---------- |
| dev:demo       | devlopment | demo       | dev        |
| dev:production | devlopment | production | dev        |
| build:demo     | devlopment |            | demo       |
| build          | production |            | production |

#### CSS 標準色

CSS 所用的全域變數，可以於 `config/palette.js` 設定整個網站的標準色等。

```javascript
export default {
	standard: '#999',
	secondary: '#DDD',
	darkBlack: '#404040',
};
```

#### CSS Media Query 設置

CSS 所用的全域變數，可以於 `config/media.js` 設定整個網站的 media query。

```javascript
export default {
	'--phone': '(width < 600px)',
	'--small-tablet': '(900px > width >= 600px)',
	'--tablet': '(1200px > width >= 900px)',
	'--desktop': '(width >= 1200px)',
};
```

## Contribution

此專案 commit message 使用 angular format ，並使用 [commitizen](http://commitizen.github.io/cz-cli/) 輔助產生 commit message

- 加入修改的檔案 `git add .`
- 產生 commit message `npm run commit`

## Release

此專案使用 [standard-version](https://github.com/conventional-changelog/standard-version) 輔助 release 流程，自動產生 `CHANGELOG.md` 和 提升版本號（提升 major version 依據是否有 `feat` 來判斷）

- `npm run release`

可以自己決定 提升 patch, minor or major

- `npm run release -- --release-as minor`

**Warning**: 第一次 release 請下

- `npm run release -- --first-release`
