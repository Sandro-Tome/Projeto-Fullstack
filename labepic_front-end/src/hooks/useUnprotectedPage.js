import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToPicturesPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToPicturesPage(history)
        }
    }, [history])
}

export default useUnprotectedPage