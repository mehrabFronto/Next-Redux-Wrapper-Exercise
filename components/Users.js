import { addUser } from "@/redux/users/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
   const dispatch = useDispatch();
   const { users } = useSelector((state) => state.users);
   const [name, setName] = useState("");

   const addNewUser = () => {
      dispatch(addUser(name));
   };

   const handleChange = (event) => {
      setName(event.target.value);
   };

   return (
      <div>
         <label>New User:</label>
         <br />
         <input
            type="text"
            value={name}
            onChange={handleChange}
         />
         <button onClick={addNewUser}>Add</button>
         <br />
         <br />

         <h4>User List:</h4>
         <br />
         <ol>
            {users.map((user) => (
               <li key={user}>{user}</li>
            ))}
         </ol>
      </div>
   );
}
