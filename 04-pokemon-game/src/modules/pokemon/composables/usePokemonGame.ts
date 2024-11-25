import { onMounted, ref } from 'vue'
import { GameStatus, type PokemonListResponse } from '../interfaces'
import { pokemonApi } from '../api/pokemonApi'

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.playing)

  const getPokemons = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151')

    console.log('response.data', response.data)
  }

  onMounted(() => {
    getPokemons()
  })

  return {
    gameStatus,
  }
}
