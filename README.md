## ポートフォリオの制作
### 制作物
現在制作中
https://portfolio.so-ta.net
### 利用技術
React.js
Material-UI
### CI/CD
1. masterブランチに更新がマージされる
2. github Actionsで自動的にビルドされる.
3. ビルドの出力はgh-pagesブランチにコミットされる.
4. github pagesでgh-pagesブランチを登録しているのでビルド出力がそのままデプロイされる形になる.

詳細: https://blog.so-ta.net/set-up/react-github-pages-actions/
### リンター
eslint, prettier
