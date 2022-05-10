import { createContext, ReactNode, useState, useEffect } from 'react'
import { Validation } from 'types/validation-type'
import axios from 'axios'
import api from '../api/api'

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isOpenModal: boolean
  setIsOpenModal: (newState: boolean) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await api('/')
      const data = await response.data
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  }, [])

  const validacao = ({ user, password }: Validation) => {
    users.map((item: any) => {
      const entry = item.login
      const pass = item.senha
      if (entry.includes(user) && pass.includes(password)) {
        const loggedUser = {
          id: '1',
          user,
          password
        }

        localStorage.setItem('user', JSON.stringify(loggedUser))
        if (password && user) {
          setUser(loggedUser)
        }
      }
      console.log('error')
    })
  }

  return (
    <UserContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </UserContext.Provider>
  )
}
