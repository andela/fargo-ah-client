import loadedArticles from '../../redux/actions/loadedArticles';

describe('Test for loadedArticles redux action', () => {
  const data = loadedArticles(['sport', 'science']);

  it('Should return an object', () => {
    expect(data.type).toBe('ARTICLES');
    expect(data.payload).toContain('sport');
    expect(data.payload).toContain('science');
  });
});
