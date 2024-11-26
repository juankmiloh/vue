import { computed, onMounted, ref } from 'vue'
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces'
import { pokemonApi } from '../api/pokemonApi'

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonsOptions = ref<Pokemon[]>([])

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length)
    return pokemonsOptions.value[randomIndex]
  })
  const isLoading = computed(() => pokemons.value.length === 0)

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151')
    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/')
      const id = urlParts.at(-2) ?? 0
      return {
        name: pokemon.name,
        id: +id, // Se coloca el (+) para convertir el resultado a un numero
      }
    })

    return pokemonsArray.sort(() => Math.random() - 0.5) // Se ordena el arreglo de manera aleatoria
  }

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.playing
    pokemonsOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
  }

  onMounted(async () => {
    pokemons.value = await getPokemons()
    getNextOptions()
    console.log('pokemonsOptions', pokemonsOptions.value)
  })

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,

    // Methods
    getNextOptions,
  }
}
