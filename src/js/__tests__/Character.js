import Character from '../Character';

test('Character', () => {
  const expected = {
    health: 100,
    level: 1,
    name: 'abc',
  };
  const received = new Character('abc');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacter() {
    return new Character('0123456789!');
  }

  expect(throwCharacter).toThrowError(new Error('Имя должно быть от 2 до 10 символов'));
});
