import { Input, InputGroup, InputLeftAddon,} from "@chakra-ui/react"
import {CiSearch} from "react-icons/ci";


export default function Search ({ pokemonFilter }){
    return(
        <InputGroup maxW='30rem' border='1px solid #bdbbbb' borderRadius='.8rem' alignItems='center'  height='100%'>
            <InputLeftAddon bg='none' border='none'><CiSearch color="white" size='30px' /></InputLeftAddon>    
            <Input onChange={(e)=> pokemonFilter(e.target.value)} type='text' color='white' placeholder='Busque Por um Pokémon' opacity='.5' border='none' _focus={{boxShadow : 'none'}} />
        </InputGroup> 
    )
}