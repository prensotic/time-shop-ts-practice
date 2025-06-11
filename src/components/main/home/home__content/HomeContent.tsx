import { Button } from "../../../button/Button"
import classes from "./HomeContent.module.css"
import {Link} from "react-router-dom"

export function HomeContent() {
  return (
		<>
			<div className={classes.home__content}>
				<h1 className={classes.home__title}>Welcome to my website</h1>
				<h3 className={classes.home__subtitle}>Time to Buy</h3>
				<p className={classes.home__text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet vero
					praesentium minima fugit sequi, voluptates odio modi laboriosam
					commodi eius delectus sed id natus nobis et cupiditate similique quia
					nemo.
				</p>
				<Link to={'/shop'}>
					<Button>Go to Shop</Button>
				</Link>
			</div>
		</>
	)
}