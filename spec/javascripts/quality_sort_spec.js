//= require quality-sort

describe('Index Lookup', function(){
  it('returns 0 for swill', function(){
    var quality = 'swill';

    expect(indexLookup(quality)).to.equal(0);
  });
});
