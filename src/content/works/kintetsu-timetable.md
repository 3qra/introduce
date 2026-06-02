---
title: "KintetsuCalc"
summary: "近鉄の駅名エイリアス、駅間距離、運賃データを参照し、簡易的な経路探索を行うPythonプロジェクト。"
date: 2026-05-21
status: "in-progress"
category: "railway"
tags: ["Python", "近鉄", "経路探索", "運賃"]
thumbnail: "/images/works/kintetsu.png"
links:
  github: "https://github.com/3qra/KintetsuCalc"
  demo: ""
  article: ""
visibility: "public"
featured: true
---

近鉄の駅名、駅間距離、普通運賃、特急料金のデータを扱い、出発地と目的地から簡易的に経路を探すためのツールです。

駅名の表記揺れに対応するために `aliases.json` を用意し、入力された駅名を正規化した上で探索に使えるようにしています。経路探索では駅間距離データをもとに、ダイクストラ法で最短距離の経路と合計距離を計算します。

データは `route.json`、`stations.json`、`basic_fares.json`、`ltd_fares.json` などに分け、経路・駅一覧・普通運賃・特急料金を参照しやすい構成にしています。

鉄道の運賃や距離、駅情報は変更される可能性があるため、公式サービスではなく個人開発の非公式プロジェクトとして扱っています。正確な利用情報は公式情報を確認する前提で、データ構造や経路探索の実装を試すことを目的にしています。
