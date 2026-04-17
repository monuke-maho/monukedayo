# デザインガイドライン

このプロジェクトのデザイン規則について記述します。

## カラー (Colors)

### テキストカラー (Text Colors)

テキストには主に以下の階調を使用します。

- **Primary (900)**: `slate-900` - 見出しや重要なテキストに使用。最大太さは `bold` (`font-bold`) とします。
- **Secondary (700)**: `slate-700` / `emerald-700` - 強調したいテキストやホバー時の色に使用。
- **Tertiary (500)**: `slate-500` - 補足説明やメタデータ（日付、タグなど）に使用。

### アクセントカラー (Accent Color)

- **Emerald**: プロジェクトの主要なアクセントカラーです。
  - `bg-emerald-50`: アイコンの背景や薄い塗りに使用。
  - `text-emerald-700`: ホバー時のテキスト色などに使用。
  - `text-emerald-500`: アイコンやグラデーションの一部に使用。

### ガラスモーフィズム (Glassmorphism)

- ヘッダーやフローティング要素に使用します。
- `bg-white/70 backdrop-blur-xl border border-white/20` の組み合わせを基本とします。

## 形状 (Shapes)

### 角丸 (Border Radius)

- **最大値**: `3xl` (`rounded-3xl`) を上限とします。
- ボタンやカードなどの主要なインタラクティブ要素には `3xl` を適用します。

## シャドウ (Shadows)

- 要素の奥行きを表現するために以下の段階を使用します。
  - **Base**: `shadow-sm`
  - **Elevated**: `shadow-md` / `shadow-lg` (ホバー時や強調したい要素)

## アニメーション (Animations)

- ホバー時の効果を活用し、リッチな体験を提供します。
  - `scale-105` (拡大)
  - `-translate-y-0.5` (浮き上がり: 2px)
- 遷移時間は `duration-300` を基本とし、スムーズな動きを実現します。
