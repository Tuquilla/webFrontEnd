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
  const [cards, setCard] = useState<Card[]>([])
  console.log(cards[0])
  return (
  <>
  <Navbar />
  <Maingrid cards={cards} setCard={setCard}>
    <Input cards={cards} setCard={setCard}/>
    <Filter cards={cards} setCard={setCard}/>
    <Vocgrid cards={cards} setCard={setCard}>
      <Sort cards={cards} setCard={setCard}/>
      <Vocabular cards={cards} setCard={setCard}/>
    </Vocgrid>
  </Maingrid>
  </> 
  )
}

export default App
