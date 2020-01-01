const filterByTerm = require("../src/filterByTerm");

describe('Filter function', () => {
  const input = [
    { id: 1, url: 'https://www.url1.dev' },
    { id: 2, url: 'https://www.url2.dev' },
    { id: 3, url: 'https://www.link3.dev' }
  ];
  test('it should filter by a search term (link)', () => {
    
    const output = [{ id: 3, url: 'https://www.link3.dev' }];
    expect(filterByTerm(input, 'link')).toEqual(output);
    expect(filterByTerm(input, 'LINK')).toEqual(output);
  });
  test('it should filter by a search term (url)', () => {

    const output = [{ id: 1, url: 'https://www.url1.dev' }, { id: 2, url: 'https://www.url2.dev' }];
    expect(filterByTerm(input, 'uRl')).toEqual(output);
  });
  test('empty search throws error', () => {
    
    const output = Error('searchTerm cannot be empty');
    expect(() => filterByTerm(input, '').toThrowError(output));
  });
});