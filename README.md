# introduce

`intro.3qra.jp` 用のAstroポートフォリオサイトです。

## 開発

```sh
npm install
npm run dev
```

## ビルド

```sh
npm run build
```

## コンテンツ追加

- 作品: `src/content/works/*.md`
- ブログ: `src/content/blog/*.md`
- 学習ログ: `src/content/learning/*.md`
- リンク: `src/content/links/main.yaml`

ブログは `draft: true` のままだと本番ビルドで非表示になります。
作品は `featured: true` かつ `visibility: public` のものがトップページに表示されます。

## GitHub Pages

`.github/workflows/deploy.yml` で `main` ブランチへのpush時にAstroをビルドし、GitHub Pagesへデプロイします。

独自ドメインは `public/CNAME` に `intro.3qra.jp` を設定済みです。DNS側では `intro` のCNAMEをGitHub Pagesのホスト名へ向けてください。
