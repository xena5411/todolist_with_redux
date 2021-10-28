# Todolist with Redux

## 簡介

練習使用Redux來寫出todolist，也順便練習了RWD的排版。
功能有: 
- 新增: 在'Why are you free now?' 處打字並enter送出
- 勾選: 滑鼠點選每個項目最左側的圓圈，按下出現打勾字樣並將該項目新增刪除線
- 刪除: 滑鼠滑動至欲刪除的項目時，項目最右側會出現叉叉圖樣，點選即可刪除。
- 修改: 滑鼠點選項目文字內容，出現打字格，打完新內容之後點選其他任意地方即完成更新，若沒有打字就點選其他地方則內容保持不變
- 分類: 下方三選項可分別顯示全部、未完成、已完成。
- 刪除所有已完成: 下方右邊按鈕可一次刪除所有已完成的項目。
- 顯示未完成項目數量: 下方左邊顯示。

## 如何開始

- 安裝 nodejs v8 以上的版本
- 安裝套件: `yarn`

#### 踏出第一步

啟動開發 server

```
yarn start
```

便可在 <http://localhost:3000> 看到本地伺服器～


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


