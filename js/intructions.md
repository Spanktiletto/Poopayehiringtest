
## Ejercicio 1:
Crea una función llamada `wordCounter` la cual recibe como paramentro un la cadena de texto y debe retornar la palabra que mas se repite dentro de esa cadena de texto.

### Input examples
Ejemplo del parametro `string`
```js
"Juan es un desarrollador en Google, y como desarrollador trabaja en el área de tecnología y en el área de innovación."
```

### Output example
Ejemplo de respuesta
> IMPORTANTE: UTILIZA LOS NOMBRES DE LOS ELEMENTOS QUE APARECEN EN ESTA RESPUESTA,
> `word` y `count` para tu respuesta, sinó no podras pasar los test.

```json
  {
    word: "en",
    count: 3
  }
```

### TEST
Para probar si tu solución es correcta corre el siguiente comando
```bash
npm run testE1
```

## Ejercicio 2: Asincronismo

Crea una función llamada `getPokemonList` y retorna una lista `objectos` de los 20 primeros pokemones, donde el primer elemento sea el nombre del pokemon y el segundo la url de la imagen del pokemon.

### APIs
```js 
const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/'
const URLImages = 'https://pokeres.bastionbot.org/images/pokemon/1.png'
```

### Hints

1. `POKEAPI` ya contiene los 20 primeros pokemones, no es necesario hacer llamadas recursivas a la API en sus diferentes páginas

2. `URLImages` (`'https://pokeres.bastionbot.org/images/pokemon/1.png'`) te servirá para obtener las imágenes correspondientes a cada pokemon, solo debes reemplazar el numero al final por el id del pokemon de la pokeAPI.

    Por ejemplo, el resultado del primer elemento de la pokeAPI es 
    ```json
    //...

    [
      //...

      {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
      }
      //...
    ]
    ```

    Nota que en la respuesta de la API, el objeto tiene 2 elementos, `name` y `url`. Donde el primero lo deberás utilizar para el primer elemento de tus objetos y el segundo, la `url`, podrás utilizarla para obtener el `id` del pokemon ya que el úlitmo número de este string, es el id del pokemon.

    ```json
      //...
        "url": "https://pokeapi.co/api/v2/pokemon/${id}/"
      //..
    ```

    Este `id` deberás reemplazarlo en `URLImages`, para obtener la imagen correspondiente al pokemon. Por ejemplo, en el caso del primer elemento, la url deberia ser de la siguiente manera ya que el `id` del primer elemento es 1

    ```js
      `https://pokeres.bastionbot.org/images/pokemon/1.png`

    ```



### Output Example
Este es un ejemplo de la respuesta esperada
> IMPORTANTE: UTILIZA LOS NOMBRES DE LOS ELEMENTOS QUE APARECEN EN ESTA RESPUESTA,
> `name` e `image` para tu respuesta, sinó no podras pasar los test
```js
  [
    //...
      {
        name: "bulbasaur",
        image: "https://pokeres.bastionbot.org/images/pokemon/1.png"
      },
      {
        name: "ivysaur",
        image: "https://pokeres.bastionbot.org/images/pokemon/2.png"
      },
      {
        name: "venusaur",
        image: "https://pokeres.bastionbot.org/images/pokemon/3.png"
      }
    //...

  ]
```
### TEST
Para probar si tu solución es correcta corre el siguiente comando
```bash
npm run testE2
```

