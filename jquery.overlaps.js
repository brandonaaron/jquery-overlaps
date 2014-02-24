/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 1.2.3
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    $.fn.overlaps = function(options) {
        if( options == undefined ) { options = {} }
        if( options.padding == undefined ) { options.padding = 0; }
        return this.pushStack(filterOverlaps(this, options.selector && $(options.selector), options));
    };

    function filterOverlaps(collection1, collection2, options) {
        var dims1  = getDims(collection1),
            dims2  = !collection2 ? dims1 : getDims(collection2),
            stack  = [],
            index1 = 0,
            index2 = 0,
            length1 = dims1.length,
            length2 = !collection2 ? dims1.length : dims2.length;

        if (!collection2) { collection2 = collection1; }

        for (; index1 < length1; index1++) {
            for (index2 = 0; index2 < length2; index2++) {
                if (collection1[index1] === collection2[index2]) {
                    continue;
                } else if (checkOverlap(dims1[index1], dims2[index2], options)) {
                    stack.push( (length1 > length2) ?
                        collection1[index1] :
                        collection2[index2]);
                }
            }
        }

        return $.unique(stack);
    }

    function getDims(elems) {
        var dims = [], i = 0, offset, elem;

        while ((elem = elems[i++])) {
            offset = $(elem).offset();
            box = elem.getBoundingClientRect();

            dims.push([
                offset.top,
                offset.left,
                elem.offsetWidth || box.width,
                elem.offsetHeight || box.height
            ]);
        }

        return dims;
    }

    function checkOverlap(dims1, dims2, options) {
        padding = options.padding 

        var x1 = dims1[1] - padding, y1 = dims1[0] - padding,
            w1 = dims1[2] + padding, h1 = dims1[3] + padding,
            x2 = dims2[1] - padding, y2 = dims2[0] - padding,
            w2 = dims2[2] + padding, h2 = dims2[3] + padding;

        return !(y2 + h2 <= y1 || y1 + h1 <= y2 || x2 + w2 <= x1 || x1 + w1 <= x2);
    }

}));
