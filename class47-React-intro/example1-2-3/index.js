// This is an old code, just going throw the History of React.js

// Example 1
import React,{ Component } from "react";
import { render } from "react-dom";

class Card extends Component {
   render(){
      const defaultStyle = {
         color: "white",
         borderColor: "red",
         borderSize: 1,
         borderStyle: "solid"
      }

      const style = {
         ...defaultStyle,
         margin: 20,
         padding: 20,
         backgroundColor: this.props.color
      }

      return <div style={style}>{this.props.children}</div>
   }
}

const node = document.getElementById('app');

const element = (
   <div>
      <Card color={"skyblue"}>Card 1</Card>
      <Card color={"steelblue"}>Card 2</Card>
      <Card color={"pink"}>Card 3</Card>
   </div>
)

render(element, node)


// Example 2
import React,{ Component } from "react";
import { render } from "react-dom";

class Water extends Component {
   state = { currentTemp: 10 }

   setTemperature = function(e){
      this.setState({ currentTemp: e.target.value });
   }

   render() {
      var stateOfMatter;

      // if temp is on/below freezing it's a solid
      if(this.state.currentTemp <= 32){
         stateOfMatter = "Solid";
      
         // if temp is on/above boiling, it's a gas
      } else if(this.state.currentTemp >= 212){
         stateOfMatter = "Gas";
      
         // otherwise it's just a liquid
      } else {
         stateOfMatter = "solid";
      }

      return(
         <div>
            <input type="text" onChange={this.setTemperature.bind(this)} value={this.state.currentTemp}/>
            <p>at {this.state.currentTemp}'F, water is considered to be a "{stateOfMatter}" state of matter.</p>
         </div>
      )
   }
}

class App extends Component {
   render(){
      const style = {
         flex: 1,
         justifyContent: 'center',
         alignItem: 'center',
      }

      return (
         <div style={style}>
            <Water />
         </div>
      )
   }
}

render(<App />, document.querySelector('#app'))



// Example 3
import React,{ Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
   state = { count: 0 }

   componentDidMount(){
      setInterval(()=>{
         this.setState({count: this.state.count + 1})
      }, 1000)
   }

   render(){
      const { count } = this.state;
      const { color, size } = this.props;

      return(
         <div>
            <h1>Doesn't Change</h1>
            <p style={{ color, fontSize: size }}>{count}</p>
         </div>
      )
   }
}

class App extends Component{
   render(){
      const style = {
         flex: 1,
         justifyContent: "center",
         alignItem: "center",
      }

      return(
         <div style={style}>
            <Counter color={"lightblue"} size={16} />
            <Counter color={"skyblue"} size={32} />
            <Counter color={"steelblue"} size={80} />
            <Counter color={"darkblue"} size={140} />
         </div>
      )
   }
}


render(<App />, document.querySelector('#app'))