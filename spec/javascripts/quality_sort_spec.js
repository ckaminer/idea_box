//= require quality_sort

describe('Index Lookup', function(){
  it('returns index for quality string', function(){
    assert.equal(indexLookup('swill'), 0);
    assert.equal(indexLookup('plausible'), 1);
    assert.equal(indexLookup('genius'), 2);
  });
});

describe('Toggle Descending', function(){
  it('toggles false to true and returns order', function(){
    assert.equal(toggleDescending(), "descending");
  });
});
