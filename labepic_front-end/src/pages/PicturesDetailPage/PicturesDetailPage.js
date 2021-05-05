import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export const PicturesDetailPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>PicturesDetailPage</h1>
        </div>
    )
}
