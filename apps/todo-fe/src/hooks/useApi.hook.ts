import axios from "axios";
import { useEffect, useState } from "react";

const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_BE_HOST}:${process.env.REACT_APP_BE_PORT}/api/v1/`
})

export interface Todo {
  id: string,
  title: string,
  description: string,
  createdAt: string,
}

export function useApi() {
  const [todoList, setTodoList] = useState<Todo[]>()
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(true)
  }, [])

  useEffect(() => {    
    if (isUpdated) {
      axiosInstance.get<{todoList: Todo[]}>('/todo-list')
        .then(response => {
          setTodoList(response.data.todoList)
          setIsUpdated(false)
        })
    }
  }, [isUpdated])

  function _updateTodo(todoData: Partial<Todo>, id: string) {
    axiosInstance.put<{isSuccess: boolean}>(`/todo/${id}`, todoData)
      .then(response => {
        if (response.data.isSuccess) {
          setIsUpdated(true)
        }
      })
  }

  function _createTodo(todoData: Partial<Todo>) {
    axiosInstance.post<{isSuccess: boolean}>(`/todo`, todoData)
      .then(response => {
        if (response.data.isSuccess) {
          setIsUpdated(true)
        }
      })
  }

  function _deleteTodo(id: string) {
    axiosInstance.delete<{isSuccess: boolean}>(`/todo/${id}`)
      .then(response => {
        if (response.data.isSuccess) {
          setIsUpdated(true)
        }
      })
  }

  function _findTodo(id: string, cb:(data: Todo) => void) {
    axiosInstance.get<{todo: Todo}>(`/todo-list/${id}`)
      .then(response => {
        if (response.data.todo) {
          cb(response.data.todo)
        }
      })
  }

  return {
    todoList,
    updateTodo: _updateTodo,
    createTodo: _createTodo,
    findTodo: _findTodo,
    deleteTodo: _deleteTodo
  }
}