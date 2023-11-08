import { Card } from '../types/Card'
import { FilterState } from '../types/FilterState'
import { SortState } from '../types/SortState'
import './Filter.css'

type Props = {
  filterStates: FilterState
  setFilterStates: (filterStates: FilterState) => void
  sortStates: SortState
  setSort: (sortStates: SortState) => void
  cards: Card[]
  setCard: (cards: Card[]) => void
}

export const Filter = ({filterStates, setFilterStates}: Props) => {

  const setBox = () => {
    const newFilterStates = {front: filterStates.front, back: filterStates.back, filterTable: filterStates.filterTable}
    newFilterStates.filterTable = !newFilterStates.filterTable
    setFilterStates(newFilterStates)
  }

  return (
  <>
  <div className="frontGridFilter"></div>
  <div className="backGridFilter"></div>
  <div className="buttonGridFilter">
    <input className="checkBox" type="checkbox" defaultChecked onClick={() => setBox()} name="scales"></input>
      <label className="checkBoxLabel" htmlFor="scales"> Filter table</label>
  </div>
  </>
  )
}