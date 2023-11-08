import { Card } from '../types/Card'
import { SortState } from '../types/SortState'
import './Sort.css'

type Props = {
    sortStates: SortState
    setSort: (sortStates: SortState) => void
    cards: Card[]
    setCard: (cards: Card[]) => void
  }

export const Sort = ({cards, setCard, sortStates, setSort}: Props) => {

  const sortFront = () => {
    const newSortStates: SortState = {front: sortStates.front, asc: sortStates.asc}
    if (newSortStates.front === true) {
      newSortStates.front = true
      newSortStates.asc = !newSortStates.asc
    }
    else {
      newSortStates.front = true
      newSortStates.asc = true
    }
    setSort(newSortStates)
  }

  const sortBack = () => {
    const newSortStates: SortState = {front: sortStates.front, asc: sortStates.asc}
    if (newSortStates.front === false) {
      newSortStates.front = false
      newSortStates.asc = !newSortStates.asc
    }
    else {
      newSortStates.front = false
      newSortStates.asc = true
    }
    setSort(newSortStates)
  }

  return (
  <>
  <div className="frontGridOrder">
    <button className="gridOrderButton" onClick={() => sortFront()} type="button">Front ▲</button>
  </div>
  <div className="backGridOrder">
    <button className="gridOrderButton" onClick={() => sortBack()} type="button">Back ▲</button>
  </div>
  <div className="buttonPlaceholder"></div>
  </>
  )
}