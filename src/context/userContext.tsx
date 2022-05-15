import { createContext, ReactNode, useState, useEffect } from 'react'
import { Validation } from 'types/validation-type'
import axios from 'axios'
import api from '../api/api'
import { useRouter } from 'next/router'

type UserContextProps = {
  children: ReactNode
}

type UserContextType = {
  isOpenModal: boolean
  setIsOpenModal: (newState: boolean) => void
  validateUser: ({ user, password }: Validation) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

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

  const validateUser = ({ user, password }: Validation) => {
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
          router.push('/main')
        }
      }
      console.log('error')
    })
  }

  return (
    <UserContext.Provider value={{ isOpenModal, setIsOpenModal, validateUser }}>
      {children}
    </UserContext.Provider>
  )
}
