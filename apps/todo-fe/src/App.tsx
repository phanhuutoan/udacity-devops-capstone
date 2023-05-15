import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { styles } from './styles'
import { ListItem } from './components/ListItem'
import { AddIcon } from '@chakra-ui/icons'
import { EditModal } from './components/EditModal'
import { Todo, useApi } from './hooks/useApi.hook'
import { useState } from 'react'

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { todoList, updateTodo, createTodo, findTodo, deleteTodo } = useApi()
  const [editedData, setEditedData] = useState<Todo | null>(null)

  function _onClose() {
    onClose()
    setEditedData(null);
  }

  function _onEdit(id: string) {
    findTodo(id, (todoData) => {
      setEditedData(todoData)
      onOpen()
    })
  }

  function _onDelete(id: string) {
    deleteTodo(id)
  }

  function _onSubmit(data: any) {
    if (editedData) {
      updateTodo(data, editedData.id);
      setEditedData(null)
    }  else {
      createTodo(data)
    }
    onClose()
  }
  return (
    <>
      <Center pt="2rem" flexDir={'column'}>
        <Text color={'gray.700'} fontSize={'45'} fontWeight={'600'} as="h1">
          Udacity final project V3
        </Text>

        <Box sx={styles.mainBox}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text color={'blue.500'} fontSize={'45'} fontWeight={'600'} as="h1">
              Todo list
            </Text>
            <Button
              onClick={onOpen}
              colorScheme="blue"
              leftIcon={<AddIcon />}
              disabled={false}
            >
              Create new
            </Button>
          </Flex>

          <Divider />
          <Box mt="2rem">
            {todoList ? (
              todoList.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    onEdit={_onEdit}
                    onDelete={_onDelete}
                  />
                )
              })
            ) : (
              <Text
                color={'gray.700'}
                fontSize={'35'}
                fontWeight={'400'}
                as="h1"
              >
                Todo is empty
              </Text>
            )}
          </Box>
        </Box>
      </Center>
      <EditModal
        onSubmit={_onSubmit}
        isOpen={isOpen}
        onClose={_onClose}
        isEdit={!!editedData}
        editedTitle={editedData?.title}
        editedDescription={editedData?.description}
      />
    </>
  )
}

export default App
