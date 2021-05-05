import { useHistory } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'
import { useEffect } from 'react'

const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLoginPage(history)
        }
    }, [history])
}

export default useProtectedPage