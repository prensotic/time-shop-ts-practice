import classes from "./HeaderNavigation.module.css"
import { Link } from 'react-router-dom'

interface IHeaderLink{
  isActive: string
  onChange(str:string):void
}

export function HeaderNavigation({isActive, onChange}:IHeaderLink) {
  return (
		<>
			<nav className={classes.header__navigation}>
				<Link
        onClick={()=>onChange('home')}
					className={
						isActive === 'home'
							? `${classes.header__link} ${classes.active}`
							: classes.header__link
					}
					to={'/'}
				>
					<label>Home</label>
				</Link>
				<Link
        onClick={()=>onChange('shop')}
					className={
						isActive === 'shop'
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