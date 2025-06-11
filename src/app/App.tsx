import { AppRoutes } from "../routes/AppRoutes"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App
