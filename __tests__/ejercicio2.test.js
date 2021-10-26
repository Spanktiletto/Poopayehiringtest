import { getPokemonList } from "../js/ejercicio2";

describe('Test ejercicio2', () => {
  test('should fetch pokemon list', async () => {
    await getPokemonList().then(data => {
      expect(data[0]).toEqual({
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
      })
    })
  })  
  test('should fetch pokemon list', async () => {
    await getPokemonList().then(data => {
      expect(data[5]).toEqual({
        name: "charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png"
      })
    })
  })  
  test('should fetch pokemon list', async () => {
    await getPokemonList().then(data => {
      expect(data[9]).toEqual({
        name: "caterpie",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png"
      })
    })
  })  
  test('should fetch pokemon list', async () => {
    await getPokemonList().then(data => {
      expect(data[19]).toEqual({
        name: "raticate",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png"
      })
    })
  })  
})
