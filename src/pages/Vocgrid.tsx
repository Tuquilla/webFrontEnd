import { Card } from '../types/Card'
import { FilterState } from '../types/FilterState'
import { SortState } from '../types/SortState'
import './Vocgrid.css'
import {ReactNode} from 'react'

type Props = {
    filterStates: FilterState
    setFilterStates: (filterStates: FilterState) => void
    sortStates: SortState
    setSort: (sortStates: SortState) => void
    cards: Card[]
    setCard: (cards: Card[]) => void
    children: ReactNode
}

export const Vocgrid = ({children}: Props) => {
    return (
    <>
    <div className="tabelleVokabular">{children}</div>
    </>
    )
}