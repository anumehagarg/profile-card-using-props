import React, { useEffect, useState }from 'react';
import './App.css';
import Profilecard from "./components/Profilecard";

const App = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
          console.log(err);
        });
    };

    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.status !== 200) {
              return;
            } else {
              setUsers(
                users.filter((user) => {
                  return user.id !== id;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
        return (
            <div className="row">
                {users.map(item => (
                    <li key={item.id}> 
                        <Profilecard
                            altname="avatar"
                            avatarUrl="https://previews.123rf.com/images/morys/morys1810/morys181000043/112955905-pitbull-mascot-vector-art-frontal-symmetric-image-of-pitbull-looking-dangerous-vector-monochrome-ico.jpg"
                            name={item.name} 
                            email={item.email}
                            id={item.id}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
            </div>
        );
    
    
}

export default App;
