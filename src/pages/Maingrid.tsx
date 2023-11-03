import './Maingrid.css'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const Maingrid = ({children} : Props) => {
    return (
        <div className="tabelle">{children}</div>
    )
}