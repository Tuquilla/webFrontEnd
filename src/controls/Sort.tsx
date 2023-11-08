import { Card } from '../types/Card'
import { FilterState } from '../types/FilterState'
import { SortState } from '../types/SortState'
import './Sort.css'

type Props = {
    filterStates: FilterState
    setFilterStates: (filterStates: FilterState) => void
    sortStates: SortState
    setSort: (sortStates: SortState) => void
    cards: Card[]
    setCard: (cards: Card[]) => void
  }

export const Sort = ({sortStates, setSort}: Props) => {

  const sortFront = () => {
    const newSortStates = {front: sortStates.front, asc: sortStates.asc}
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
    const newSortStates = {front: sortStates.front, asc: sortStates.asc}
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

  const arrowFront = () => {
    if (sortStates.front === true) {
      if (sortStates.asc === true) {
        return " ▲"
      }
      else {
        return " ▼"
      }
    }
  }

  const arrowBack = () => {
    if (sortStates.front === false) {
      if (sortStates.asc === true) {
        return " ▲"
      }
      else {
        return " ▼"
      }
    }
  }

  return (
  <>
  <div className="frontGridOrder">
    <button className="gridOrderButton" onClick={() => sortFront()} type="button">Front{arrowFront()}</button>
  </div>
  <div className="backGridOrder">
    <button className="gridOrderButton" onClick={() => sortBack()} type="button">Back{arrowBack()}</button>
  </div>
  <div className="buttonPlaceholder"></div>
  </>
  )
}