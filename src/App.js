import React from 'react';
import './App.css';
import Profilecard from "./components/Profilecard";

class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {
        
        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="row">
                {items.map(item => (
                    <li key={item.id}> 
                        <Profilecard
                            altname="avatar"
                            avatarUrl="https://previews.123rf.com/images/morys/morys1810/morys181000043/112955905-pitbull-mascot-vector-art-frontal-symmetric-image-of-pitbull-looking-dangerous-vector-monochrome-ico.jpg"
                            name={item.name} 
                            email={item.email}
                        />
                    </li>
                ))}
            </div>
        );
    }
    
}

export default App;