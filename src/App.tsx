import './App.css'
import {Card} from './types/Card'
import {SortState} from './types/SortState'

import {Navbar} from './widgets/Navbar'
import {Maingrid} from './pages/Maingrid'
import {Input} from './controls/Input'
import {Filter} from './controls/Filter'
import {Vocgrid} from './pages/Vocgrid'
import {Sort} from './controls/Sort'
import {Vocabular} from './pages/Vocabular'

import {useState} from 'react'

function App() {
  const [cards, setCard] = useState<Card[]>([])
  const [sortStates, setSort] = useState<SortState>({front: true, asc:true})
  return (
  <>
  <Navbar />
  <Maingrid cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort}>
    <Input cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort}/>
    <Filter cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort}/>
    <Vocgrid cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort}>
      <Sort cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort}/>
      <Vocabular cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort}/>
    </Vocgrid>
  </Maingrid>
  </> 
  )
}

export default App
