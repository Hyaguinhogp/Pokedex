export interface IPokemonList {
    results: IPokemon[]
}

export interface IPokemon {
    name: string
    weight: number
    height: number
    sprites: { front_default: string }
    stats: IStat[]
    types: IType[]
}

export interface IStat {
    base_stat: number
    stat: { name: string }
}

export interface IType {
    type: { name: string }
}

export interface ISpecie {
    evolution_chain: { url: string }
}

export interface IEvolutionChain {
    chain: IChain
}

export interface IChain {
    species: IPokemon
    evolves_to: IChain[]
}

