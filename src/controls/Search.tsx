import './Search.css'

export const Search = () => {
    return (
    <>
    <div className="frontGrid">
      <input className="inputText" type="text" placeholder="Front"></input>
    </div>
    <div className="backGrid">
      <input className="inputText" type="text" placeholder="Back"></input>
    </div>
    <div className="buttonGrid">
      <button className="buttonSaveDeleteGrid" type="button">Save</button>
    </div>
    </>
    )
}