import { HomeContent } from "./home__content/HomeContent"
import { HomeSlider } from "./home__slider/HomeSlider"
import classes from "./Home.module.css"

export function Home() {
  return (
		<>
			<section className={classes.home}>
				<HomeContent />
				<HomeSlider />
			</section>
		</>
	)
}