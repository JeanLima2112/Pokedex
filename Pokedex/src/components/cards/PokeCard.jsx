import { Flex, Image, Text} from "@chakra-ui/react";

export function PokeCard({ name, image, id, types }) {
    const typeHandler = () => {
        if (types[1]) {
          return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
      };
    return(
        <Flex w='fit-content' opacity='.4' transition='1s' _hover={{color:'yellow',opacity:'1'}}  className="Card" h='100%' color='white' justifyContent='center' direction='column' border='1px solid white' borderRadius='2rem' p='2rem'>
            <Flex justifyContent='space-between'>
                <Text fontWeight='bold' fontSize='1.2rem'>#{id}</Text>
                <Text fontSize='1.4rem'>{name}</Text>
            </Flex>
            <Flex transition='1s' _hover={{filter:'drop-shadow(1px 1px 10px red)'}}  justifyContent='center' width='10rem' ><Image  w='100%' src={image} /></Flex>
            <Flex w='100%' justifyContent='center' h='fit-content' borderRadius='1rem' border='2px solid white' p='1.5%' bor>
                <Text>{typeHandler()}</Text>
            </Flex>
            
        
        </Flex>
    )
}