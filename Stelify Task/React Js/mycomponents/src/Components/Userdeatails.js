import React from "react";

const data = [
  {id:1, name: "Anom",   age: 19, gender: "Male" },
  {id:2, name: "Megha",  age: 19, gender: "Female" },
  {id:3, name: "Subham", age: 25, gender: "Male" },
  {id:4, name: "Ram",    age: 25, gender: "Male" },
  {id:5, name: "Sitha",  age: 25, gender: "Female" },
  {id:6, name: "Hunman", age: 25, gender: "Male" },
];

function Userdeatails() {
  return (
    <div className="App">
      
      <div className="container">
        <div className="card">
          <div className="card-body">
           <div className="row justify-content-end">
          <div className="col-3 ">
             <select className="form-control">
              <option>1</option>
              
            </select>
          </div>
           </div>
            <table className="table table-light table-hover">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                      <td>{val.gender}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdeatails;
