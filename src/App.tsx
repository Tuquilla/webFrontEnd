import './App.css'

import { Navbar } from './widget/Navbar'
import { Maingrid } from './pages/Maingrid'
import { Search } from './controls/Search'
import { Filter } from './controls/Filter'
import { Vocgrid } from './pages/Vocgrid'
import { Sort } from './controls/Sort'
import { Vocabular } from './pages/Vocabular'

function App() {

  return (
  <>
  <Navbar />
  <Maingrid>
    <Search />
    <Filter />
    <Vocgrid>
      <Sort />
      <Vocabular />
    </Vocgrid>
  </Maingrid>
  </> 
  )
}

export default App
