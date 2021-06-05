import { Component } from "react";

class App extends Component {
  
  state={
    isOpen:false,
  }
  onButtonClick =(e) =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render(){
  return (
    <div className="filter">
        {/* <button onClick={this.onButtonClick} 
        className="button">Open Me</button>
        {
          this.state.isOpen && <div>
               <input type="text" name="filter"></input>
          </div>
        } */}

        

    </div>
  );
}
}

export default App;
