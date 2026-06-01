import Menu from "./components/Menu"
import Terminal from "./components/Terminal"

function App() {

  return (
    <div className="bg-neutral-950 h-screen w-screen flex flex-col min-h-screen justify-center items-center">
      <div>
        <Menu></Menu>
        <br/>
        <Terminal></Terminal>
      </div>
    </div>
  )
}

export default App
