
import Navbar from "../Navbar"



const App = ({children}) => {


  return (
    <div className="app" >
      <div className="container">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default App