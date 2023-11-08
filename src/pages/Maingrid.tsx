import { Card } from '../types/Card'
import { SortState } from '../types/SortState'
import './Maingrid.css'
import {ReactNode} from 'react'

type Props = {
    sortStates: SortState
    setSort: (sortStates: SortState) => void
    cards: Card[]
    setCard: (cards: Card[]) => void
    children: ReactNode
}

export const Maingrid = ({children} : Props) => {
    return (
        <div className="tabelle">{children}</div>
    )
}