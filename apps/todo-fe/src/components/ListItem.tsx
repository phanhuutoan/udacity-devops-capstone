import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { styles } from "../styles"

interface Props {
  id: string
  title: string
  description: string
  onEdit(id: string): void
  onDelete(id: string): void
}

export const ListItem = ({
  title, description, onEdit, onDelete, id
}: Props) => {
  return (
    <Flex 
      sx={styles.listItem}>
      <Box>        
        <Text 
          color="orange.400" 
          fontWeight={'500'} 
          fontSize={'1.8rem'}>{title}</Text>
        <Text w={'80%'} color="gray.700" fontSize={'1.2rem'}>{description}</Text>
      </Box>

      <HStack cursor={'pointer'}>
        <EditIcon 
          onClick={() => onEdit(id)} 
          color="blue.300"
          boxSize={'2rem'} />
        <DeleteIcon 
          onClick={() => onDelete(id)} 
          color="red.400" 
          boxSize={'2rem'}/>
      </HStack>
    </Flex>
  )
}