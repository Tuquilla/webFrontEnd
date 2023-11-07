import { Card } from '../types/Card'
import './Sort.css'

type Props = {
    cards: Card[]
    setCard: (cards: Card[]) => void
  }

export const Sort = ({cards}: Props) => {
    return (
    <>
    <div className="frontGridOrder">Front ▲</div>
    <div className="backGridOrder">Back ▼</div>
    <div className="buttonGridOrder"></div>
    </>
    )
}