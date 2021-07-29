import { wordCounter } from "../js/ejercicio1";

describe('Word counter test', () => {
  const cases = [
    'Juan es un desarrollador en Google, y como desarrollador trabaja en el área de tecnología y en el área de innovación.',
    'A A A Peru',
    'Anita lava la tina y la alfombra',
    'Lorem Ipsum doror sit amet lorem lorem'
  ]
  test('should count words from string', () => {
    expect(wordCounter(cases[0])).toEqual(
      {
        word: "en",
        count: 3
      }
    )
  })
  test('should count words from string', () => {
    expect(wordCounter(cases[1])).toEqual(
      {
        word: "A",
        count: 3
      }
    )
  })
  test('should count words from string', () => {
    expect(wordCounter(cases[2])).toEqual(
      {
        word: "la",
        count: 2
      }
    )
  })
  test('should count words from string', () => {
    expect(wordCounter(cases[3])).toEqual(
      {
        word: "lorem",
        count: 2
      }
    )
  })
  
})
