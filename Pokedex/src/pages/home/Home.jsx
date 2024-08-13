import { Flex, Image} from "@chakra-ui/react"
import { PokeCard } from "../../components/cards/PokeCard";
import Search from "../../components/Search";
import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";


export default function Home(){
    const [pokemons,setPokemons] = useState([]);
    useEffect(() =>{
        getPokemons();
    },[]);
    const getPokemons = () => {
        var endpoints = []
        for( var i=1;i<=100;i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

    }
    const pokemonFilter = (name) =>{
        if (name ===""){
            getPokemons();
        }
        var filteredPokemons = []
        for (var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons)
    };
    
    return(
        <Flex w='100%' direction='column'>
            <Flex className="Header" bg='black' borderBottom='2px solid white' h='4rem' w='100%' justifyContent='space-between' px='1rem' py='.1rem'>
                <Image src="public/assets/logo/logo.png" />
                <Search pokemonFilter={pokemonFilter} />
            </Flex> 
            <Flex className="container" minH='100vh' p='2%' bg='black' wrap='wrap' gap='2rem' justifyContent='space-evenly'>
                {pokemons.length === 0 ? (
                <Loader />
                ) : (
                 pokemons.map((pokemon,idx)=>(
                    <PokeCard 
                    key = {idx}
                    name ={pokemon.data.name}
                    image ={pokemon.data.sprites.front_default}
                    id = {pokemon.data.id}
                    types = {pokemon.data.types}
                    />
                )))}
            </Flex>
            


        </Flex>
    )
}