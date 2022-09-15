import Productos from "./ProductosListado"

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        } , 500)
    })
}

export const getItemById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Productos.find(prod => prod.id === id))
        }, 500)
    })
}

export default customFetch