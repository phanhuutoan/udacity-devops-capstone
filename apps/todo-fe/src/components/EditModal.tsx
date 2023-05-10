import { CheckIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose(): void
  isEdit: boolean
  onSubmit(data: { title?: string; description?: string }): void
  editedTitle?: string
  editedDescription?: string
}

export const EditModal = ({
  isOpen,
  onClose,
  isEdit,
  onSubmit,
  editedTitle,
  editedDescription,
}: Props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (editedDescription && editedTitle && isEdit) {
      setTitle(editedTitle)
      setDescription(editedDescription)
    } else {
      setTitle('')
      setDescription('')
    }
  }, [editedDescription, editedTitle, isEdit])

  function _onSubmit() {
    if (!title || !description) {
      alert('Please fill all fields.')
    } else {
      const value = {
        title,
        description,
      }
      onSubmit(value)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize={'1.4rem'}
          color={isEdit ? 'blue.600' : 'green.500'}
        >
          {isEdit ? 'Edit your TODO item' : 'Create your new TODO'}
        </ModalHeader>
        <ModalCloseButton color={'red.600'} />
        <ModalBody>
          <chakra.form>
            <FormControl>
              <FormLabel>Todo title</FormLabel>
              <Input
                placeholder="I have to do..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl mt="1.2rem">
              <FormLabel>Todo descrition</FormLabel>
              <Textarea
                placeholder="At 10h00 in ABC place"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </chakra.form>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
            onClick={_onSubmit}
            leftIcon={<CheckIcon />}
          >
            Submit
          </Button>
          <Button colorScheme="gray" ml={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
