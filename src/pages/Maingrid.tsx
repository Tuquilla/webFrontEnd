import { Card } from '../types/Card'
import './Maingrid.css'
import {ReactNode} from 'react'

type Props = {
    cards: Card[]
    setCard: (cards: Card[]) => void
    children: ReactNode
}

export const Maingrid = ({children} : Props) => {
    return (
        <div className="tabelle">{children}</div>
    )
}