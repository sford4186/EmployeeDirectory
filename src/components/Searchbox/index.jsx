import { useState } from "react"

const Searchbox =props=>{
    const [term, setTerm] = useState("")
    const handleSearch = term => {
        console.log(term)
        const filteredList =props.employees.filter(employee=> employee.name.first.toLowerCase().includes(term.toLowerCase()) || employee.name.last.toLowerCase().includes(term.toLowerCase()) )
        props.update(filteredList)
        setTerm(term)
      }
    return(
    <div className="form-group">
    <input
      onChange={e => handleSearch(e.target.value) }
      value={term}
      name="search"
      type="text"
      className="form-control"
      placeholder="Search for a person"
      id="search"
    />
  </div>
    )
}
export default Searchbox