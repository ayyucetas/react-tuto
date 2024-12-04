import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [number, setNumber] = useState(0);
  const benSayiArttiririm=()=>{ setNumber(number+1) }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => console.log(e))
      .finally(() => setIsloading(false));
  }, []);
  console.log("ovguntas", number);
  return (
    <div>
      <h1> Users</h1>
      {isLoading && <div> Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name} </div>
      ))}
      {
        number&&number
      } 
      <button button onClick={()=>benSayiArttiririm() }> arttır</button>
    </div>
  );
}
export default Users;
