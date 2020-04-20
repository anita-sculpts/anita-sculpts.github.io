declare global {
    type Sculpture = {
        title: string,
        medium: string,
        dimensions: string,
        price: number?,
        images: Array<string>,
        thumbnail: string
    }
}

export { };