import { useState } from "react"
import { products } from "../../../../data/products"
import classes from "./HomeSlider.module.css"
import { Button } from "../../../button/Button"

export function HomeSlider() {
  const [slide, setSlide] = useState(0)

  function handleLeftClick () {
    if(slide === 0) {
      setSlide(slide + products.length-1)
    }
    else{
      setSlide(slide - 1)
    }
  }

  function handleRightClick() {
    if (slide === products.length - 1) {
			setSlide(slide - (products.length - 1))
		}
    else{
      setSlide(slide + 1)
    }
  }

  return (
		<>
			<div className={classes.home__slider}>
				<Button onClick={handleLeftClick}>{'<'}</Button>
				{products
					.filter(product => product.id === slide)
					.map(product => (
						<img alt={product.name} key={product.id} src={product.image} />
					))}
				<Button onClick={handleRightClick}>{'>'}</Button>
			</div>
		</>
	)
}