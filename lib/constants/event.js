var constants = require('./');
var define = constants.definer(exports);

/**
 * 非同期処理結果ステータス
 */
define('STATUS_SUCCESS', 'success');      // 正常終了
define('STATUS_ERROR', 'error');          // 異常終了
define('STATUS_COMPLETE', 'complete');    // フロー制御完了
define('STATUS_TAG_END', 'tag_end');      // タグ処理完了

/**
 * コントローラ実行結果ステータス
 */
define('RESPONSE_RESPOND', 'respond');    // レスポンス返却
define('RESPONSE_REDIRECT', 'redirect');  // リダイレクト
define('RESPONSE_ERROR', 'error');        // エラーレスポンス返却

console.log(exports);