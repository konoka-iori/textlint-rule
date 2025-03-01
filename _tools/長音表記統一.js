//
// 長音ありのリスト
//
// 参考: http://www.atmarkit.co.jp/news/200807/25/microsoft.html
const list = [
  'アクセサー',
  'アクター',
  'アクティベーター',
  'アグリゲーター',
  'アセンブラー',
  'アダプター',
  'アップデーター',
  'アップローダー',
  'アドバイザー',
  'アドミニストレーター',
  'アナライザー',
  'アニメーター',
  'アロケーター',
  'アンインストーラー',
  'アンカー',
  'アンギュラー',
  'アンパッカー',
  'イコライザー',
  'イニシエーター',
  'イニシャライザー',
  'イネーブラー',
  'イメージセッター',
  'インサーター',
  'インジェクター',
  'インジケーター',
  'インストーラー',
  'インスペクター',
  'インターセプター',
  'インタープリター',
  'インデクサー',
  'インテグレーター',
  'インバーター',
  'インバリデーター',
  'インポーター',
  'ウォーカー',
  'ウォーター',
  'ウォリアー',
  'エキスパンダー',
  'エクスチェンジャー',
  'エクステンダー',
  'エクスプローラー',
  'エクスポーター',
  'エスカレーター',
  'エゼクター',
  'エディター',
  'エバリュエーター',
  'エミュレーター',
  'エレベーター',
  'エンコーダー',
  'オーガナイザー',
  'オートダイヤラー',
  'オートフィルター',
  'オシレーター',
  'オフィサー',
  'オブザーバー',
  'オプティマイザー',
  'オペレーター',
  'オルタネーター',
  'カウンター',
  'カスタマー', // 「カスタマイズ」にぶつかってしまう
  'カスタマイザー',
  'カテゴライザー',
  'ガバナー',
  'カプラー',
  'カムコーダー',
  'キャラクター',
  'キュイラシェー',
  'クラスター',
  'クリーナー',
  'クリエーター',
  'クローラー',
  'コーディネーター',
  'コレクター',
  'コンシューマー',
  'コンストラクター',
  'コンセントレーター',
  'コンダクター',
  'コンテナー',
  'コンデンサー',
  'コントリビューター',
  'コントローラー',
  'コンバーター',
  'コンピューター',
  'コンフィギュレーター',
  'コンプレッサー',
  'コンベクター',
  'コンペンセーター',
  'コンポーザー',
  'コンポジター',
  'サーバー',
  'サブウーファー',
  'サブコンテナー',
  'サブスクライバー',
  'サブフィルター',
  'サブフォルダー',
  'サブマスター',
  'サプライヤー',
  'サブレイヤー',
  'サプレッサー',
  'サマライザー',
  'シアター',
  'シーケンサー',
  'シェーダー',
  'ジェネレーター',
  'シフター',
  'シャッター',
  'ジャンパー',
  'シリアライザー',
  'シリンダー',
  'シンクロナイザー',
  'シンセサイザー',
  'スイッチャー',
  'スーパーバイザー',
  'スーパーバイザー',
  'スーペリアー',
  'スカベンジャー',
  'スカラー',
  'スキャッター',
  'スキャナー',
  'スクリーナー',
  'スクリーンセーバー',
  'スクリプター',
  'スクレーパー',
  'スタッカー',
  'ステージャー',
  'ステマー',
  'ストーカー',
  'スニファー',
  'スパイダー',
  'スピアー',
  'スピーカー',
  'スプーラー',
  'スプリッター',
  'スペーサー',
  'スライサー',
  'スライダー',
  'セクター',
  'セパレーター',
  'セレクター',
  'センサー',
  'センター',
  'センダー',
  'タイプライター',
  'タイマー',
  'ダイヤラー',
  'ダウンローダー',
  'チェンジャー',
  'チャプター',
  'チャレンジャー',
  'チューナー',
  'ディザー',
  'ディストリビューター',
  'ディスパッチャー',
  'ディスペンサー',
  'ディバイダー',
  'ディフューザー',
  'ディレクター',
  'テクスチャライザー',
  'デコーダー',
  'デザイナー',
  'デジタイザー',
  'デシリアライザー',
  'テスター',
  'デストラクター',
  'デスプーラー',
  'デバイザー',
  'デバッガー',
  'デベロッパー',
  'デマルチプレクサー',
  'デリミター',
  'ドライバー',
  'ドライヤー',
  'トラクター',
  'トラッカー',
  'トランシーバー',
  'トランスデューサー',
  'トランスファー',
  'トランスフォーマー',
  'トランスポンダー',
  'トランスレーター',
  'トリガー',
  'トリマー',
  'トレーサー',
  'トレーラー',
  'ドロアー',
  'ナビゲーター',
  'ナレーター',
  'ノーマライザー',
  'パートナー',
  'バーバライザー',
  'バインダー',
  'パケッタイザー',
  'パスファインダー',
  'バスマスター',
  'パッケージャー',
  'バッファー',
  'パブリッシャー',
  'パラメーター',
  'バランサー',
  'バリオメーター',
  'バリデーター',
  'パルベライザー',
  'ハンドラー',
  'ハンマー',
  'ビジュアライザー',
  'ピッカー',
  'ビヘイビアー',
  'ピュアライザー',
  'ビューアー',
  'ビルダー',
  'ファイナライザー',
  'ファイバー',
  'ファインダー',
  'ファクター',
  'フィーダー',
  'フィニッシャー',
  'フィルター',
  'フィンガー',
  'ブースター',
  'ブートローダー',
  'フェイダー',
  'フォルダー',
  'フォワーダー',
  'フッター',
  // 'ブラウザー', // 「ブラウザ」も一定の支持があるので
  'プランジャー',
  'プランナー',
  'プリマスター',
  'プリンター',
  'プルーナー',
  'ブレーカー',
  'プレースホルダー',
  'フレーバー',
  'プレゼンター',
  'プレビューアー',
  'プレフィルター',
  'ブレンダー',
  'ブローカー',
  'ブロードキャスター',
  'プロジェクター',
  'ブロッカー',
  'プロッター',
  'プロテクター',
  'プロデューサー',
  'プロバイダー',
  'プロファイラー',
  'ベアラー',
  'ページャー',
  'ベクター',
  'ヘッダー',
  'ヘリコプター',
  'ヘルパー',
  'ベンダー',
  'ボイジャー',
  'ポインター',
  'ポストマスター',
  'ポリマー',
  'ホルダー',
  'マーシャラー',
  'マイナー',
  'マインスイーパー',
  'マスター',
  'マッパー',
  'マニピュレーター',
  'マネージャー',
  'マルチフィーダー',
  'マルチプライヤー',
  'マルチプレクサー',
  'マルチマスター',
  'マルチモニター',
  'マルチレイヤー',
  'ミキサー',
  'ミニドライバー',
  'ミニフィルター',
  'ミューテーター',
  'メッセンジャー',
  'メディエイター',
  'メンバー',
  'メンバーシップ',
  'モジュラー',
  'モディファイヤー',
  'モデレーター',
  'モニカー',
  'モニター',
  'ライザー',
  'ライセンサー',
  'ライター',
  'ラスター',
  'ラスタライザー',
  'リアクター',
  'リクエスター',
  'リスナー',
  'リゾルバー',
  'リダイレクター',
  'リパッケージャー',
  'リパブリッシャー',
  'リファクター',
  'リフレッシャー',
  'リマインダー',
  'リンカー',
  'レイヤー',
  'レコーダー',
  'レコグナイザー',
  'レシーバー',
  'レジストラー',
  'レスポンダー',
  'レビューアー',
  'レプリケーター',
  'レベラー',
  'レポーター',
  'レンダー',
  'レンダラー',
  'ローカライザー',
  'ロケーター',
];

// あいうえお順に
list.sort((a, b) => {
  const digit = 10000;
  const aValue = a.charCodeAt(0) * (digit ** 2) + a.charCodeAt(1) * digit + a.charCodeAt(2);
  const bValue = b.charCodeAt(0) * (digit ** 2) + b.charCodeAt(1) * digit + b.charCodeAt(2);

  return aValue - bValue;
});

const arr = list.map(str => {
  const original = str.slice(0, -1);
  return `
  - pattern: /${original}(?!([ーァ-ヴ]))/
    expected: ${str}
    prh: 語尾が -er, -or, -ar で終わる語彙には長音を付けます（外来語カタカナ表記）`;
});

arr.unshift(
  '# ========================================\n' +
  '# 長音ありのリスト（動的に生成）\n' +
  '# \n' +
  '# ソース : ../_tools/長音表記統一.js \n' +
  '# 最終出社日 : ' +
  new Date().toLocaleString() +
  '\n' +
  '# ========================================\nrules:',
);

const fs = require('fs');
fs.writeFileSync('./dict/prh_cho_on.yml', arr.join('\n'));
