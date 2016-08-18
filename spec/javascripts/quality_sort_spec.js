//= require quality_sort

describe('Index Lookup', function(){
  it('returns 0 for swill', function(){
    var quality = 'swill';

    assert.equal(indexLookup(quality), 0);
    // expect(indexLookup(quality)).to.equal(0);
  });
});
