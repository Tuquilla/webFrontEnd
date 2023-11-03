import './App.css'

import { Navbar } from './widget/Navbar'
//import { Maingrid } from './pages/Maingrid'
import { Search } from './controls/Search'
import { Sort } from './controls/Sort'
import { Vocuabular } from './pages/Vocabular'

function App() {

  return (
  <>
  <Navbar />
  <div className="tabelle">
    <Search />
    <div className="tabelleVokabular">
      <Sort />
      <Vocuabular />
    </div>
  </div>
  </> 
  )
}

export default App
