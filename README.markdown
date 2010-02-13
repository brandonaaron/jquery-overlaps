# overlaps

A jQuery plugin that detects if one or more elements are overlapping.

The overlaps method exposes two modes of operation. First mode is to filter the selected elements to only those that overlap. The second mode is to compare one set of nodes against another and return true or false if any overlap. In addition to the `.overlaps()` method this plugin exposes a new selector `:overlaps`. 

    // filter result set
    $('div').overlaps();
    // could also be written like this
    $('div:overlaps');
    
    // test if one element overlaps another
    $('#div1').overlaps('#div2');
    $('#div1, #div2').is(':overlapping'); // :overlapping is an alias for :overlaps


## License

The overlaps plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2010 [Brandon Aaron](http://brandonaaron.net)