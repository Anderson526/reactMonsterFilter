import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

constructor(){
  super();
  this.state = {
    monsters:[

      {
        name:'monsterlokis',
        id: '12345'
       },
     {
        name: 'monstermiau',
        id: '123456'
       },
      {
        name:'monsterdog',
        id: '123457'
       }

    ]
 

  };
}

componentDidMount(){
  //se ejecuta cada vez que se renderice un componente 

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => console.log(users))
}


render() {

 

  return (
    <div className="App">
  
{
  this.state.monsters.map((monster) => {
    return(
    <div key={monster.name}>
      <h1 >{monster.name}</h1>
    </div>
    ); 
    
  })
}

    </div>
  );
}
}

export default App;



