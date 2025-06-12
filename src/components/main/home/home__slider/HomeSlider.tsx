import { useEffect, useState } from "react"
import classes from "./HomeSlider.module.css"
import { Button } from "../../../button/Button"
import type { IProduct } from "../../../../models/Product"
import { fetchProducts } from "../../../../api/fetchProducts"
import { Product } from "../../../product/Product"

export function HomeSlider() {
  const [slide, setSlide] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([])

  

  useEffect(()=>{
    fetchProducts().then(data=>{
      setProducts(data)
    })
  }, [])

  function handleLeftClick () {
    if(slide === 0) {
      setSlide(slide + products?.length - 1)
    }
    else{
      setSlide(slide - 1)
    }
  }

  function handleRightClick() {
    if (slide === products?.length - 1) {
			setSlide(slide - (products?.length - 1))
		} else {
			setSlide(slide + 1)
		}
  }

  return (
		<>
			<div className={classes.home__slider}>
				<Button onClick={handleLeftClick}>{'<'}</Button>
        {products?.filter(product=>product.id === slide).map(product=><Product key={product.id} product={product}/>)}
				<Button onClick={handleRightClick}>{'>'}</Button>
			</div>
		</>
	)
}