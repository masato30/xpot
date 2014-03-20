/**
 * 定数定義クラス
 */
var Constants = (function () {

    function Constants() {}

    /**
     * 入力されたオブジェクトに対して、定数定義を追加します。
     *
     * @param object オブジェクト
     * @param name 名前
     * @param value 値
     * @returns {*} 入力オブジェクト
     */
    Constants.define = function (object, name, value) {
        if (typeof name === 'object') {
            for (var key in name) {
                if (name.hasOwnProperty(key)) {
                    Constants.define(object, key, name[key]);
                }
            }
        } else {
            Object.defineProperty(object, name, {
                value:          value,
                enumerable:     true,
                writable:       false,
                configurable:   false
            });
        }

        return object;
    };

    /**
     *
     *
     * @param object
     * @returns {Function}
     */
    Constants.definer = function (object) {
        object = object || Object.create(null);
        return function (name, value) {
            return Constants.define(object, name, value);
        };
    };

    return Constants;
})();

module.exports = {
    definer: Constants.definer
};