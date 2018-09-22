import loadCategories from '../../../redux/actions/loadCategories';

describe('Test for loadcatogories redux action', () => {
  const data = loadCategories(['sport', 'science']);

  it('Should return an object', () => {
    expect(data.type).toBe('LOAD_CATEGORY');
    expect(data.payload).toContain('sport');
    expect(data.payload).toContain('science');
  });
});
