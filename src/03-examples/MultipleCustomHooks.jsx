import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1'
    const { data, isLoading, hasError } = useFetch(url);

    return (

        <>
            <h1>Informacion de pokemon</h1>
            <hr />
            {isLoading && <p>Cargando</p>}
            <p>{data?.name}</p>
        </>)
}
