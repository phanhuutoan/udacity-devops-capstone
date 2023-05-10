import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('App', () => {

  describe('UI', () => {
    it('should show Udacity final project', () => {
      render(<App />)
      
      const element = screen.getByText('Udacity final project')
      expect(element).toBeDefined()
    })

    it('should show Todo list title', () => {
      render(<App />)
      
      const element = screen.getByText('Todo list')
      expect(element).toBeDefined()
    })

    it('should have create new button', () => {
      render(<App />)

      const btn = screen.getByRole('button', {name: 'Create new'})
      expect(btn).toBeDefined()
    })
  })

  describe('behavior', () => {
    it('should show modal', async () => {
      render(<App />)
      const btn = screen.getByRole('button', {name: 'Create new'})
      expect(btn).toBeDefined()

      expect(screen.queryByText('Create your new TODO')).toBeNull()
    })
  })
})