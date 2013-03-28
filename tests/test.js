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

test(".overlaps(selector)", 5, function() {
    ok($('#one').overlaps('#two').length, '#one overlaps with #two');
    ok($('#one').overlaps('#four').length, '#one overlaps with #four');
    ok(!$('#one').overlaps('#three').length, '#one does not overlap with #three');
    ok(!$('#two').overlaps('#four').length, '#two does not overlap with #four');
    ok($('#one, #three').overlaps('#two').is('#one'), '#one overlaps with #two, verify element is returned');
});

test(".overlaps(selector)/adjacent", 6, function() {
    ok(!$('#adjacent1').overlaps('#adjacent2').length, 'no overlap');
    ok(!$('#adjacent1').overlaps('#adjacent3').length, 'no overlap');
    ok(!$('#adjacent1').overlaps('#adjacent4').length, 'no overlap');
    ok(!$('#adjacent2').overlaps('#adjacent3').length, 'no overlap');
    ok(!$('#adjacent2').overlaps('#adjacent4').length, 'no overlap');
    ok(!$('#adjacent3').overlaps('#adjacent4').length, 'no overlap');
});
