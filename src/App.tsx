import './App.css'
import { Navbar} from './widget/Navbar'

function App() {

  return (
  <>
  <Navbar />
  <div className="tabelle">
    <div className="frontGrid">
      <input className="inputText" type="text" placeholder="Front">
        </input>
    </div>
    <div className="backGrid">
      <input className="inputText" type="text" placeholder="Back">
        </input>
    </div>
    <div className="buttonGrid">
      <button className="buttonSaveDeleteGrid" type="button">Save</button>
    </div>
    <div className="frontGridFilter">
    </div>
    <div className="backGridFilter">
    </div>
    <div className="buttonGridFilter">
      <input className="checkBox" type="checkbox" defaultChecked /*onChange={}*/ name="scales"></input>
        <label className="checkBoxLabel" htmlFor="scales"> Filter table</label>
    </div>
    <div className="tabelleVokabular">
      <div className="frontGridOrder">
        Front ▲
      </div>
      <div className="backGridOrder">
        Back ▼
      </div>
      <div className="buttonGridOrder">
      </div>
      <div className="frontGridVokabular">
        Stunde
      </div>
      <div className="backGridVokabular">
        Hour
      </div>
      <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
      </div>
      <div className="trennlinie">
      </div>
      <div className="trennlinie">
      </div>
      <div className="trennlinie">
      </div>
      <div className="frontGridVokabular">
        Auto
      </div>
      <div className="backGridVokabular">
        Car
      </div>
      <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
      </div>
      <div className="trennlinie">
      </div>
      <div className="trennlinie">
      </div>
      <div className="trennlinie">
      </div>
      <div className="frontGridVokabular">
        Bleistift
      </div>
      <div className="backGridVokabular">
        Pencil
      </div>
      <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
      </div>
      <div className="trennlinie">
      </div>
      <div className="trennlinie">
      </div>
      <div className="trennlinie">
      </div>
      <div className="frontGridVokabular">
        Bleistift
      </div>
      <div className="backGridVokabular">
        Pencil
      </div>
      <div className="buttonGridVokabular">
        <button className="buttonSaveDeleteGrid" type="button">Delete</button>
      </div>
    </div>
  </div>
  </> 
  )
}

export default App
