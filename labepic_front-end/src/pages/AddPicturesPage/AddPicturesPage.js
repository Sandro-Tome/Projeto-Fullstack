import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export const AddPicturesPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>AddPicturesPage</h1>
        </div>
    )
}
