---
title: Web開発するなら絶対WSL使え
description: ネイティブのWindowsは遅い、WSLを使おう
date: 2026-04-17
emoji: 🐧
tags:
  - 開発
  - Web
published: true
---
## Windowsは遅い

最初から比較です。  
このブログのリポジトリをクローンして、依存関係をインストールする時間の比較。

### Windows

![WindowsTerminal_DDwfXVD8RG.webp](../images/mo30a9a7-jh601mxo.webp)

約40秒です。

### WSL2(Ubuntu)

![WindowsTerminal_nvRO06j33S.webp](../images/mo30bgm7-ez30evh0.webp)

約2秒です。

## ストレスである

Windowsで開発していました。前までは。  
いやしかし、パッケージのインストールが遅すぎる。

MacBookで開発しているとパッケージのインストールとか開発サーバーの起動が速いのなんの。

Macで開発したあとにWindowsに戻るともう遅くてストレスでした。

## WSLをインストールしよう

WSL2をインストールしていこう。

```shell
wsl --install -d ubuntu
```

でインストールできます。場合によっては再起動が必要になるかもしれません。

## おわり

内容が薄いですが、以上です。
NTFSの仕様上小さいファイルの操作が遅いらしい。フォーマットを選べるようになって欲しいな。