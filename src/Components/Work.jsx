
import { useState, useEffect } from "react";

export default function Work() { 
  const [worker, setWorker] = useState([]);
  const [num, setNum] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [select, setSelect] = useState("");

  const searchItem = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => {
        setWorker(data);
        console.log(data);
      });
  }, [num]);

  const selectOption = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          placeholder="search..."
          className="searchInput"
          onChange={searchItem}
        />
        <select name="" id="" className="option" onChange={selectOption}>
          <option value="">Department</option>
          <option value="Management">Management</option>
          <option value="Recruitment">Recruitment</option>
          <option value="Security">Security</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {worker
            .filter(
              (a) =>
                a.name.toUpperCase().includes(searchText.toUpperCase()) &&
                (select === "" || a.department === select)
            )
            .map((w, i) => (
              <tr key={i}>
                <td>{w.id}</td>
                <td>{w.name}</td>
                <td>{w.department}</td>
                <td>{w.role}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}