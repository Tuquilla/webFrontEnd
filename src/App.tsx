import './App.css'
import {Card} from './types/Card'
import {SortState} from './types/SortState'
import {FilterState} from './types/FilterState'

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
  const [filterStates, setFilterStates] = useState<FilterState>({front: '', back: '', filterTable: true})
  return (
  <>
  <Navbar />
  <Maingrid cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort} filterStates={filterStates} setFilterStates={setFilterStates}>
    <Input cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort} filterStates={filterStates} setFilterStates={setFilterStates}/>
    <Filter cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort} filterStates={filterStates} setFilterStates={setFilterStates}/>
    <Vocgrid cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort} filterStates={filterStates} setFilterStates={setFilterStates}>
      <Sort cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort} filterStates={filterStates} setFilterStates={setFilterStates}/>
      <Vocabular cards={cards} setCard={setCard} sortStates={sortStates} setSort={setSort} filterStates={filterStates} setFilterStates={setFilterStates}/>
    </Vocgrid>
  </Maingrid>
  </> 
  )
}

export default App
