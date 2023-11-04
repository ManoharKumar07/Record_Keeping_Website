import Header from "./components/Header";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import Field from "./components/Field";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
 
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div>
        <div className="container">
          <div className="Form">
            <div className="Name">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
              <label htmlFor="name" className="form-label">
                Name
              </label>
            </div>
            <div className="Email">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
              <label htmlFor="email" className="form-label2">
                Email
              </label>
            </div>
            <div className="add">
              <button className="btn" onClick={addData}>
                <GroupAddIcon />
              </button>
            </div>
          </div>

          {/* data card */}
          <div className="data">
            <div className="data-heading">
              <h3>Name</h3>
              <h3>Email</h3>
              <h3>Remove &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            </div>
            {data.map((element, index) => {
             return(<Field
              key={element.index}
              name={element.name}
              email={element.email}
              index={element.index}
              data={data}
              setData={setData}
             />)
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
