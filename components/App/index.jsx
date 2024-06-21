import Navbar from "../Navbar"

const App = ({children}) => {
  return (
    <div className="app" >
        <Navbar />
        {children}
    </div>
  )
}

export default App