import Fab from '@material-ui/core/Fab'
import styled from 'styled-components'

export const ImagesListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
`

export const AddImageButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 30px;
    z-index: 3;
`