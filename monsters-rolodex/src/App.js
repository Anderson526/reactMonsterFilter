import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

constructor(){
  super();
  this.state = {
    monsters: [],
    searchField: '',
  };
}

componentDidMount(){
  //se ejecuta cada vez que se renderice un componente 

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => this.setState(
    ()=>{
     return {monsters : users};
    
    },()=>{
      console.log(this.state)
    }
  ))
}


render() {

  const datafilter = this.state.monsters.filter((monster) =>{
    return monster.name.toLocaleLowerCase().includes(this.state.searchField);

  })
  
  return (
    <div className="App">



  <input className='search-box' type='search' placeholder='search your monster' onChange={(event) => {




    const searchField = event.target.value.toLocaleLowerCase();
   

this.setState(
  
  ()=>{

  return {searchField};
 

})

console.log(datafilter);

   }}/>
{
  datafilter.map((monster) => {
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



