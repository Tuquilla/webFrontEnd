import './App.css'
import {Card} from './types/Card'

import {Navbar} from './widgets/Navbar'
import {Maingrid} from './pages/Maingrid'
import {Input} from './controls/Input'
import {Filter} from './controls/Filter'
import {Vocgrid} from './pages/Vocgrid'
import {Sort} from './controls/Sort'
import {Vocabular} from './pages/Vocabular'

import {useState} from 'react'

function App() {
  const [Cards, setCard] = useState<Card[]>([])
  return (
  <>
  <Navbar />
  <Maingrid cards={Cards} setCard={setCard}>
    <Input cards={Cards} setCard={setCard}/>
    <Filter cards={Cards} setCard={setCard}/>
    <Vocgrid cards={Cards} setCard={setCard}>
      <Sort cards={Cards} setCard={setCard}/>
      <Vocabular cards={Cards} setCard={setCard}/>
    </Vocgrid>
  </Maingrid>
  </> 
  )
}

export default App
