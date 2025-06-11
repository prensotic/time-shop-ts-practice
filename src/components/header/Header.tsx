import { Logo } from "../logo/Logo"
import { HeaderNavigation } from "./header__navigation/HeaderNavigation"
import classes from './Header.module.css'

export function Header() {
  return (
		<>
			<header className={classes.header}>
				<div className={classes.header__container}>
          <Logo/>
          <HeaderNavigation />
				</div>
			</header>
		</>
	)
}