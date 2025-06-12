import classes from "./Shop.module.css"
import { fetchProducts } from "../../../api/fetchProducts"
import { useEffect, useState } from "react"
import type { IProduct } from "../../../models/Product"
import { Product } from "../../product/Product"

export function Shop() {
  const [products, setProducts] = useState<IProduct[]>()
  useEffect(()=>{
    fetchProducts().then(data=>{
      setProducts(data)
    })
  }, [])
  return (
		<>
			<section className={classes.shop}>
				<div className={classes.home__container}>{products?.map(product=><Product key={product.id} product={product}/>)}</div>
			</section>
		</>
	)
}