import { useState, useEffect } from "react"

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Container, Badge, ListGroup, Form, Button } from "react-bootstrap";
import Axios from "axios"


export default function App() {

  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")






  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then(res => {
        setUsers(res.data)

      })

  }, [users])

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      age: age,
      email: email

    })
      .then(res => {
        // setUsers(res.data)
        console.log("res.data")

      })
  }





  // const users =
  //   [
  //     { "_id": "64199fea8b1078509d2bcf51", "name": "Apple", "age": 20, "email": "jaafarsuliman1997@gmail.com" },
  //     { "_id": "6419a1f08b1078509d2bcf53", "name": "Jaafar", "age": 30, "email": "jaafarsuliman1997@gmail.com" },
  //     { "_id": "6419a1f18b1078509d2bcf54", "name": "Ahmad", "age": 33, "email": "jaafarsuliman1997@gmail.com" }
  //   ]

  return (
    <>
      {users.map(user => {
        return (
          <div className="card">
            <ul>
              <li>Name:{user.name}</li>
              <li>Age:{user.age}</li>
              <li>email:{user.email}</li>
            </ul>
          </div>
        )

      })}

      <div>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="age" onChange={e => setAge(e.target.value)} />
        <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
        <button onClick={createUser}>createUser</button>

      </div>
    </>

  );
}

