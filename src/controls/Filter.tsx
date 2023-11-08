import { Card } from '../types/Card'
import { SortState } from '../types/SortState'
import './Filter.css'

type Props = {
  sortStates: SortState
  setSort: (sortStates: SortState) => void
  cards: Card[]
  setCard: (cards: Card[]) => void
}

export const Filter = ({cards}: Props) => {
    return (
    <>
    <div className="frontGridFilter"></div>
    <div className="backGridFilter"></div>
    <div className="buttonGridFilter">
      <input className="checkBox" type="checkbox" defaultChecked /*onChange={}*/ name="scales"></input>
        <label className="checkBoxLabel" htmlFor="scales"> Filter table</label>
    </div>
    </>
    )
}