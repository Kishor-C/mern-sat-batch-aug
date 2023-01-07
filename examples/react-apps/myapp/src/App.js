import logo from './logo.svg';
import './App.css';


function DummyList() {
  return (<div>
    <table className = "table table-striped">
      <thead>
        <tr>
          <th>ID</th><th>NAME</th><th>SALARY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123</td><td>Alex</td><td>30000</td>
        </tr>
        <tr>
          <td>449</td><td>Brad</td><td>35000</td>
        </tr>
      </tbody>
    </table>
  </div>)
}

function ListDemo() {
  let fruits = ["apple", "mango", "grapes", "orange"];
  // create a table that will have multiple rows generated using map function
  // table will have totally 4 columns like name, gender, state and city
  let users = [
    {name:"Alex", gender:"Male", address: {state:"KA", city:"BLR"}},
    {name:"Bruce", gender:"Male", address: {state:"KA", city:"MYS"}},
    {name:"Meghana", gender:"Female", address: {state:"KA", city:"BLR"}}
  ];

  return <div>
    <ol>
    {fruits.map((value, index) => <li key = {index}>{value}</li>)}
    </ol>
    <div>
      <table className = "table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Gender</th><th>State</th><th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((value, index) => <tr key = {index}>
              <td>{value.name}</td><td>{value.gender}</td><td>{value.address.state}</td><td>{value.address.city}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
}

function App() {
  let handleClick = (e) => {
    alert('click event occured!')
  }
  let handleChange = (e) => {
    alert(e.target.value);
  }
  return (<div>
    <button onClick = {handleClick}>My Button</button>
    <div>
      <input type = "text" onChange = {handleChange}></input>
    </div>
    <div>
      <input type = "number" onChange={(e) => alert(e.target.value)}></input>
    </div>
  </div>)
}

export default App;
