import $ from "./_jQuery.js";

class ComponentHelper {

    static createTemplate(innerHTML) {
        let e = $("<template></template>")[0];
        e.innerHTML = innerHTML;
        return e.content.cloneNode(true);
    }

    static jsonLoad(src, callback) {
        if (!src) {
            console.log("[ERR] JSON: Empty call.");
            return;
        }
        let filename = src.split('/').pop();
        let jsxhr = $.getJSON(src,
            function() {
                console.log(`[OK] JSON: '${filename}'.`);
            }
        );
        jsxhr.fail(
            function(jqxhr, textStatus, error) {
                console.log(`[ERR] JSON: '${filename}' ${textStatus} (${error}).`);
            }
        );
        jsxhr.done(
            function(data) {
                callback(data);
            }
        );
        return jsxhr;
    }

    static arrayToSentence(arr) {
        var last = arr.pop();
        if (arr.length == 0) { return last; }
        return arr.join(', ') + ' and ' + last;
    }

}

export default ComponentHelper;