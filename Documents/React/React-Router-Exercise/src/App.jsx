import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"



function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">

        <div className="flex-grow">
          <Header></Header>

          <Outlet></Outlet>

        </div>
        <div className="align-bottom">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
