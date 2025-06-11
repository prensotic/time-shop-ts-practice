import classes from './Footer.module.css'

export function Footer() {
	return (
		<>
			<footer className={classes.footer}>
				<div className={classes.footer__container}>
					<p className={classes.copyright__title}>© Presnotic</p>
					<p className={classes.lorem__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime
						impedit, eos vero reiciendis quasi, rem optio expedita iste
						necessitatibus omnis magnam? Corporis, asperiores id nesciunt nihil
						natus porro. Neque!
					</p>
				</div>
			</footer>
		</>
	)
}
