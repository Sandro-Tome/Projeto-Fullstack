export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToPicturesPage = (history) => {
    history.push("/")
}

export const goToPicturesDetailPage = (history, id) => {
    history.push(`/imagem/${id}`)
}

export const goToAddPicturesPage = (history) => {
    history.push("/adicionar-imagem")
}