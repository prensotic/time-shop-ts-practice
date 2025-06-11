import { Logo } from "../logo/Logo"
import { HeaderNavigation } from "./header__navigation/HeaderNavigation"
import classes from './Header.module.css'
import { useState } from "react"

export function Header() {
  const [page, setPage] = useState('home')
  return (
		<>
			<header className={classes.header}>
				<div className={classes.header__container}>
          <Logo/>
          <HeaderNavigation onChange={current => setPage(current)} isActive={page}/>
				</div>
			</header>
		</>
	)
}