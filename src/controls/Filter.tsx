import './Filter.css'

export const Filter = () => {
    return (
    <>
    <div className="frontGridFilter"></div>
    <div className="backGridFilter"></div>
    <div className="buttonGridFilter">
      <input className="checkBox" type="checkbox" defaultChecked /*onChange={}*/ name="scales"></input>
        <label className="checkBoxLabel" htmlFor="scales"> Filter table</label>
    </div>
    </>
    )
}