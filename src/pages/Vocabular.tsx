import { Card } from '../types/Card'
import './Vocabular.css'

type Props = {
    cards: Card[]
    setCard: (cards: Card[]) => void
}

export const Vocabular = ({cards}: Props) => {
    return (
    <>
    <div className="frontGridVokabular">Stunde</div>
    <div className="backGridVokabular">Hour</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="frontGridVokabular">Auto</div>
    <div className="backGridVokabular">Car</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="frontGridVokabular">Bleistift</div>
    <div className="backGridVokabular">Pencil</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="frontGridVokabular">Bleistift</div>
    <div className="backGridVokabular">Pencil</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="frontGridVokabular">Bleistift</div>
    <div className="backGridVokabular">Pencil</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="frontGridVokabular">Bleistift</div>
    <div className="backGridVokabular">Pencil</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="frontGridVokabular">Bleistift</div>
    <div className="backGridVokabular">Pencil</div>
    <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    {cards.map(card => 
    <>
    <div key={card.front} className="frontGridVokabular">{card.front}</div>
    <div key={card.back} className="backGridVokabular">{card.back}</div>
    <div key={card.back+card.front} className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
    </div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    <div className="trennlinie"></div>
    </>)}
    </>
    )
}