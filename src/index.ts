import { getPokemon } from "./genericss/get-pokemon";
import { Pokemon } from './decorators/pokemon-class';



getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.log(error))
    .finally(() => console.log('Fin'))


const charmander = new Pokemon('Charmander');
//(Pokemon.prototype as any).customName = 'Pikachu';


console.log(charmander.publicApi = "http://probado.com");
console.log(charmander.savePokemontoDB(5088))