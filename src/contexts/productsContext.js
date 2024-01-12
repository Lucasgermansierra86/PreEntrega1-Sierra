import React, { createContext, useContext, useState } from "react";
import { productsData } from "../data";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ProductsContext = createContext()
export const useProductsContext = () => useContext(ProductsContext)
const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const getProducts = async(categoryId) =>{
        const q = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");
        const querySnapshot = await getDocs(q);
        const data=[]
        querySnapshot.forEach((doc) => {
            data.push(
                {
                    id:doc.id,
                    ...doc.data()
                
                }
            ) 
          });

        
        
        setProducts(data)


    }

    const getProductById = async (itemId) =>{

        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id:itemId, 
                ...docSnap.data()
            }
          } else {
            
            console.error("No existe el elemento");
          }
          

    }

    return (

       <ProductsContext.Provider value={{products, getProducts, getProductById}}>
        {children}
       </ProductsContext.Provider>
        
        
        
    )
} 

export default ProductsProvider;