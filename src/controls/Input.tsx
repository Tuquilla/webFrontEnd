import { Card } from '../types/Card'
import { FilterState } from '../types/FilterState'
import { SortState } from '../types/SortState'
import './Input.css'

type Props = {
  filterStates: FilterState
  setFilterStates: (filterStates: FilterState) => void
  sortStates: SortState
  setSort: (sortStates: SortState) => void
  cards: Card[]
  setCard: (cards: Card[]) => void
}

export const Input = ({cards, setCard, filterStates, setFilterStates}: Props) => {

  const addFront = (text: string) => {
    const newFilterStates = {front: filterStates.front, back: filterStates.back, filterTable: filterStates.filterTable}
    newFilterStates.front = text
    setFilterStates(newFilterStates)
  }

  const addBack = (text: string) => {
    const newFilterStates = {front: filterStates.front, back: filterStates.back, filterTable: filterStates.filterTable}
    newFilterStates.back = text
    setFilterStates(newFilterStates)
  }

  const clearInput = () => {
    const newFilterStates = {front: '', back: '', filterTable: filterStates.filterTable}
    setFilterStates(newFilterStates)
  }

  const addCard = () => {
    const newCards = [...cards,{front: filterStates.front, back: filterStates.back}]
    setCard(newCards)
    clearInput()
  }

  return (
  <>
  <div className="frontGrid">
      <input className="inputText" value={filterStates.front} onChange={e => addFront(e.target.value)} type="text" placeholder="Front" id="inputFront"></input>
  </div>
  <div className="backGrid">
    <input className="inputText" value={filterStates.back} onChange={e => addBack(e.target.value)} type="text" placeholder="Back" id="inputBack"></input>
  </div>
  <div className="buttonGrid">
    <button className="buttonSaveDeleteGrid" onClick={() => addCard()} type="button">Save</button>
  </div>
  </>
  )
}