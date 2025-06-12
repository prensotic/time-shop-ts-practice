import classes from "./Product.module.css"
import type { IProduct } from "../../models/Product"
import { CalcDiscount } from "../../utils/CalcDiscount"

interface ProductProps{
  product: IProduct
}

export function Product({product}: ProductProps) {
	return (
		<>
			<div className={classes.product}>
				<img src={product.image} alt='' />
				<h2 className={classes.product__name}>{product.name}</h2>
				<div className={classes.price__container}>
					<span className={classes.old__price}>{product.price}$</span>
					<span className={classes.current__price}>{CalcDiscount(product.price, product.discount)}$</span>
          <span className={classes.discount}>-{product.discount}%</span>
				</div>
			</div>
		</>
	)
}