# cdk-gof-design-patterns

AWS Dev Day 2023 Tokyo での登壇セッション『**AWS CDK で学ぶ GoF デザインパターン 〜IaC にもコード設計〜**』の CDK コード実例とクラス図集です。

※以下リンクからセッションの動画や登壇資料をご覧いただけます。

- [YouTube](https://www.youtube.com/watch?v=Gi0m08NuLJw)
- [登壇資料](https://speakerdeck.com/gotok365/aws-dev-day-cdk-gof-design-patterns)
- その他参考
  - ブログ記事: [AWS CDK 内部実装で使われている GoF デザインパターン](https://go-to-k.hatenablog.com/entry/aws-cdk-internal-gof-paterns)

## Tooling

このリポジトリでは TypeScript ツールチェーンとして `Vite+` を利用します。

- まず [viteplus.dev](https://viteplus.dev) から `vp` CLI を導入
- `.node-version` で Node.js `24.14.0` を固定
- `vp env use` でプロジェクトの Node.js バージョンを選択
- `package.json` の `packageManager` で `pnpm@10.28.1` を固定し、`vp install` が自動で利用
- 依存関係のインストールは `vp install`
- 通常の検証は `vp check`
- テストは `vp test`
- パッケージングは `vp pack`
- TypeScript 製の CLI エントリーポイント実行は `vp run cli`
- CDK コマンドは `vp exec cdk` を利用

## Composite

### Composite: 概念

![composite-concept](./drawio/composite/composite-concept.drawio.svg)

### Composite: CDK

![composite-cdk](./drawio/composite/composite-cdk.drawio.svg)

### Composite: 簡略 CDK

![composite-cdk-simplified](./drawio/composite/composite-cdk-simplified.drawio.svg)

## Facade

### Facade: 概念

![facade-concept](./drawio/facade/facade-concept.drawio.svg)

### Facade: CDK

![facade-cdk](./drawio/facade/facade-cdk.drawio.svg)

## Adapter

### Adapter: 概念

![adapter-concept](./drawio/adapter/adapter-concept.drawio.svg)

### Adapter: CDK

![adapter-cdk](./drawio/adapter/adapter-cdk.drawio.svg)

## Decorator

### Decorator: 概念

![decorator-concept](./drawio/decorator/decorator-concept.drawio.svg)

### Decorator: CDK

![decorator-cdk](./drawio/decorator/decorator-cdk.drawio.svg)

### Decorator: 簡略 CDK

![decorator-cdk](./drawio/decorator/decorator-cdk-simplified.drawio.svg)

## Singleton

### Singleton: 概念

![singleton-concept](./drawio/singleton/singleton-concept.drawio.svg)

### Singleton: CDK

![singleton-cdk](./drawio/singleton/singleton-cdk.drawio.svg)

## Strategy

### Strategy: 概念

![strategy-concept](./drawio/strategy/strategy-concept.drawio.svg)

### Strategy: CDK

![strategy-cdk](./drawio/strategy/strategy-cdk.drawio.svg)

### Strategy: 簡略 CDK

![strategy-cdk-simplified](./drawio/strategy/strategy-cdk-simplified.drawio.svg)

## Template Method

### Template Method: 概念

![template-method-concept](./drawio/template-method/template-method-concept.drawio.svg)

### Template Method: CDK

![template-method-cdk](./drawio/template-method/template-method-cdk.drawio.svg)

## Factory Method

### Factory Method: 概念

![factory-method-concept](./drawio/factory-method/factory-method-concept.drawio.svg)

### Factory Method: CDK

![factory-method-cdk](./drawio/factory-method/factory-method-cdk.drawio.svg)

## Abstract Factory

### Abstract Factory: 概念

![abstract-factory-concept](./drawio/abstract-factory/abstract-factory-concept.drawio.svg)

### Abstract Factory: CDK

![abstract-factory-cdk](./drawio/abstract-factory/abstract-factory-cdk.drawio.svg)

### Abstract Factory: 簡略 CDK

![abstract-factory-cdk-simplified](./drawio/abstract-factory/abstract-factory-cdk-simplified.drawio.svg)

## Visitor

### Visitor: 概念

![visitor-concept](./drawio/visitor/visitor-concept.drawio.svg)

### Visitor: CDK

![visitor-cdk](./drawio/visitor/visitor-cdk.drawio.svg)

### Visitor: 簡略 CDK

![visitor-cdk-simplified](./drawio/visitor/visitor-cdk-simplified.drawio.svg)
