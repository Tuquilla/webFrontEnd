import './Vocgrid.css'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const Vocgrid = ({children}: Props) => {
    return (
    <>
    <div className="tabelleVokabular">{ children }</div>
    </>
    )
}