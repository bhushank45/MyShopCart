import React,{useCallback,useEffect,useState} from "react";


function Users() {
    const [users,setUsers]=useState([]);
    const fetchUsers=useCallback(async () => {
        try {
            const response = await fetch ("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            console.log(err.message);
        }
    });
    useEffect(()=>{
        fetchUsers();
    },[fetchUsers]);
    return (
        <div>
            <h2>Users</h2>
            {users.map((user)=>(
                <p key={user.id}>
                    {user.name} - {user.email}
                </p>
            ))}
        </div>
    )
}

export default Users