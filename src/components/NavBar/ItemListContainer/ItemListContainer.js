import { products } from "../../../data"
import ProductDetail from "../ProductDetail"

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            {products.map(prod=><ProductDetail product={prod}/>)}
        </div>
    )
}

export default ItemListContainer  