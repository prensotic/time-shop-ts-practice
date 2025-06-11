import classes from "./HeaderNavigation.module.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function HeaderNavigation() {
  const location = useLocation().pathname
  return (
		<>
			<nav className={classes.header__navigation}>
				<Link
					className={
						location === '/'
							? `${classes.header__link} ${classes.active}`
							: classes.header__link
					}
					to={'/'}
				>
					<label>Home</label>
				</Link>
				<Link
					className={
						location === '/shop'
							? `${classes.header__link} ${classes.active}`
							: classes.header__link
					}
					to={'/shop'}
				>
					<label>Shop</label>
				</Link>
			</nav>
		</>
	)
}