/*
one overlaps with two and four
two overlaps with one
three does not overlap with anything
four overlaps with one
*/

test(".overlaps()", 2, function() {
    var results = $('#one, #two, #three, #four').overlaps();
    ok(results.length == 3, 'should have three elements');
    ok(!results.is('#three'), 'should not have #three in the results');
});

test(".overlaps(selector)", 4, function() {
    ok($('#one').overlaps('#two'), '#one overlaps with #two');
    ok($('#one').overlaps('#four'), '#one overlaps with #four');
    ok(!$('#one').overlaps('#three'), '#one does not overlap with #three');
    ok(!$('#two').overlaps('#four'), '#two does not overlap with #four');
});

test(":overlaps/:overlapping", 4, function() {
    ok($('#one, #two').is(':overlapping'), '#one overlaps with #two');
    ok($('#one, #four').is(':overlaps'), '#one overlaps with #four');
    ok(!$('#one, #three').is(':overlapping'), '#one does not overlap with #three');
    ok(!$('#two, #four').is(':overlaps'), '#two does not overlap with #four');
});