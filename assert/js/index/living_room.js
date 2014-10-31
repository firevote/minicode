/**
 * Created by W.J.Chang on 2014/10/30.
 */
define(function(require,exports){
    function init() {

        var editor = CodeMirror.fromTextArea(document.getElementById("demotext"), {
            lineNumbers: true,
            collapsed:true,

            mode: "text/html",
            matchBrackets: true
        });

    }
    exports.init = init;
});