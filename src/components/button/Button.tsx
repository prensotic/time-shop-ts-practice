import classes from './Button.module.css'

interface IButton{
  children: React.ReactNode
  onClick?():void
}

export function Button({ children, onClick }: IButton) {
	return <button onClick={onClick} className={classes.button}>{children}</button>
}