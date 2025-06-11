import {Routes, Route} from 'react-router-dom'
import { Home } from '../components/main/home/Home'
import { Shop } from '../components/main/shop/Shop'

export function AppRoutes() {
  return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</>
	)
}