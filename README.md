# www.dx-junkyard.com

dx-junkyard の紹介サイトです

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

## 記事の執筆に参加するためには？

皆さんが記事の執筆に参加するために、一連の流れの例を記載します。

### 事前知識

本プロジェクトは、GitHub flow に基づいて開発を行います。
[GitHub flow - GitHub Docs](https://docs.github.com/en/get-started/using-github/github-flow)

原則、main ブランチに向けて Pull Request を作成してください。  
main ブランチにマージされたコードは、リリースのタイミングで main ブランチにマージされます。

main ブランチにマージされたコードは、CODEOWNERS によってリリースパッケージが作成された後に、本番環境にデプロイされます。

### 執筆の流れ
#### 1. リポジトリのフォーク

GitHub のリポジトリページで本プロジェクトをフォークしてください。

#### 2. 記事の執筆

_postsフォルダのtemplate.mdをコピーして、記事を執筆してください。
記事の執筆に完了したら、tagをdraftからongoing(実施中)またはcomplete(完了済み)に変更してください。

#### 4. 変更したコードの push

変更したコードを push しましょう。  
ブランチ名は「feature/{markdownのファイル名}」のような命名規則としてください。

#### 5. PR の作成

main ブランチに向けて PR を作成しましょう。CODEOWNERS のメンバーがレビューします。

#### 6. プルリクエストのレビュー

プルリクエストがレビューされ、問題がなければ本プロジェクトにマージされます。  
CODEOWNERS から修正の指摘があった場合は、それに応じて変更を加えてください。
