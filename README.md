# 概要
* Gatsbyサイトである下記サンプルをカスタマイズして、自己紹介サイトを作成しました。
https://github.com/gatsbyjs/gatsby-starter-blog
* ご指示いただいたデザインに可能な限り近いコーディングをしました（レスポンシブ対応済み）。
* Typescript, Styled-Component を使用しました。
* Netlify CMSとGitを連携し、デプロイまでをほぼ自動化させました。

# 使用技術と紐づくライブラリ一覧
* React
  * react(16.10.2)、react-dom(16.10.2)など
* Gatsby.js
  * gatsby(2.16.1)、gatsby-image(2.2.29)など
* Typescript
  * gatsby-plugin-typescript(2.1.15)
* Styled-Components
  * babel-plugin-styled-components(1.10.6)、gatsby-plugin-styled-components(3.1.11)、styled-components(4.4.0)
* "トップへ戻る" のスムーススクロール
  * react-scroll(1.7.14)
* FontAwsome
  * @fortawesome/fontawesome-svg-core(1.2.25)、@fortawesome/free-solid-svg-icons(^5.11.2)、@fortawesome/react-fontawesome(0.1.6)
* レスポンシブ
  * styled-media-query(2.1.2)
* eslint系

# 未対応箇所
* 下記ファイルはTypeScriptへ変換できておりません。
  * /src/components/Activity.js
  * /src/pages/404.js
  * /src/templates/blog-post.js
  * /src/utils/typography.js
* デザインにある実績詳細ページを実装できておりません（実績サイトへ直接遷移）。
* トップページのCMS化ができておりません。
