import './App.css'
import REST from './components/REST'
import GraphQL from './components/GraphQL'

function App() {

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
     <REST/>
     <GraphQL/>
    </div>
  )
}

export default App
