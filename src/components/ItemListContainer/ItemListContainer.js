import { useParams } from "react-router-dom"
import { useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useProductsContext } from "../../contexts/productsContext"


const ItemListContainer = ({greeting}) => {
    const {products, getProducts} = useProductsContext()

    const {categoryId} = useParams()

    useEffect(() => {

        getProducts (categoryId)
    
    }, [categoryId])

    const user = {name:"lucas", lastname: "Sierra"}
    let {name, lastname}=user 

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productList={products}/>
        </div>
    )
}

export default ItemListContainer  