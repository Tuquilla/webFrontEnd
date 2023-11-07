import { Card } from '../types/Card'
import './Vocgrid.css'
import {ReactNode} from 'react'

type Props = {
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