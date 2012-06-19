/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 1.1
 */

(function($) {

$.fn.overlaps = function(selector) {
    // if nothing is passed, act as a filter
    if (arguments.length === 0) {
        return this.pushStack(filterOverlaps(this));
    }
    // otherwise compare selected elements against passed eleemnts
    else {
        return isOverlapping(this, $(selector));
    }
};

$.expr[':'].overlaps = function(elem, i, m, array) {
    return isOverlapping([elem], array);
};
$.expr[':'].overlapping = $.expr[':'].overlaps;

function filterOverlaps(collection) {
    var dims   = getDims(collection),
        stack  = [],
        index1 = 0,
        index2 = 0,
        length = dims.length;
    
    for (; index1 < length; index1++) {
        for (index2 = 0; index2 < length; index2++) {
            if (index1 === index2) { 
                continue;
            }
            if (checkOverlap(dims[index1], dims[index2])) {
                stack.push(collection[index2]);
            }
        }
    }
    
    return $.unique(stack);
}

function isOverlapping(collection1, collection2) {
    var dims1   = getDims(collection1),
        dims2   = getDims(collection2),
        index1  = 0,
        index2  = 0,
        length1 = dims1.length,
        length2 = dims2.length;

    for (; index1 < length1; index1++) {
        for (index2 = 0; index2 < length2; index2++) {
            if (collection1[index1] === collection2[index2]) {
                continue;
            }
            if (checkOverlap(dims1[index1], dims2[index2])) {
                return true;
            }
        }
    }
    
    return false;
}

function getDims(elems) {
    var dims = [], i = 0, offset, elem;
    
    while ((elem = elems[i++])) {
        offset = $(elem).offset();
        dims.push([
            offset.top,
            offset.left,
            elem.offsetWidth,
            elem.offsetHeight
        ]);
    }
    
    return dims;
}

function checkOverlap(dims1, dims2) {
    var x1 = dims1[1], y1 = dims1[0],
        w1 = dims1[2], h1 = dims1[3],
        x2 = dims2[1], y2 = dims2[0],
        w2 = dims2[2], h2 = dims2[3];
    return !(y2 + h2 <= y1 || y1 + h1 <= y2 || x2 + w2 <= x1 || x1 + w1 <= x2);
}

})(jQuery);