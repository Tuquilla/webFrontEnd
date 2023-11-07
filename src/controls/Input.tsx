import { Card } from '../types/Card'
import './Input.css'

type Props = {
  cards: Card[]
  setCard: (cards: Card[]) => void
}

export const Input = ({cards, setCard}: Props) => {
  
  const card: Card = {front: '', back: ''}

  const addFront = (front: string) => {
    card.front=front
  }

  const addBack = (back: string) => {
    card.back=back
  }

  const addCard = (card: Card) => {
    const newCards = [...cards,card]
    setCard(newCards)
  }

  return (
  <>
  <div className="frontGrid">
    <input className="inputText" onChange={e => addFront(e.target.value)} type="text" placeholder="Front"></input>
  </div>
  <div className="backGrid">
    <input className="inputText" onChange={e => addBack(e.target.value)}type="text" placeholder="Back"></input>
  </div>
  <div className="buttonGrid">
    <button className="buttonSaveDeleteGrid" onClick={() => addCard(card)} type="button">Save</button>
  </div>
  </>
  )
}