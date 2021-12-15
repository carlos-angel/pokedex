import { POKE_API } from '../utils/constants';

export async function getPokemonsApi() {
  try {
    const url = `${POKE_API}/pokemon?limit=20&offset=0`;
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    throw error;
  }
}