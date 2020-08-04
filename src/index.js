import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//People and location

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.city}, you are located in {props.location} of Australia.</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = "Tom"
//   const now = new Date().getFullYear()
//   const age = 20
//   const city = ["Sydney", "Melbourne"]
//   const location = ["southeast", "south"]
//   return (
//     <div>
//       <Hello city = {city[0]} location = {location[0]}/>
//       <Hello city = {city[1]} location = {location[1]}/>
//       <Hello city = "Perth" location = "west"/>
//       <p>{name} was born in {now - age}</p>
//     </div>
//   )
// }


//Transcript

// const Transcript = ({name, math, history, biology}) => {
  // const name = props.name
  // const math = props.math
  // const history = props.history
  // const biology = props.biology

  // const total = () => {
  //   return (
  //     math + history + biology
  //   )
  // }

  // const average = () => {
  //   return (
  //     ((math + history + biology) / 3).toFixed(2)
  //   )
  // }

//   const total = () => math + history + biology
//   const average = () => ((math + history + biology) / 3).toFixed(2)


//   return (
//     <div>
//       <h3>Hello {name}, here is your transcript.</h3>
//       <ul>
//         <li>math - {math}</li>
//         <li>history - {history}</li>
//         <li>biology - {biology}</li>
//         <li>Your total scor is {total()}</li>
//         <li>Your average score is {average()}</li>
//       </ul>
//     </div>
//   )
// }

// const App = () => {
//   const name = "Alice"
//   const math = 95
//   const history = 90
//   const biology = 80
//   return (
//     <div>
//       <Transcript name = {name} math = {math} history = {history} biology = {biology}/>
//     </div>
//   )
// }

// Counter

// const Display = (props) => {
//   return (
//     <div> {props.counter} </div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.eventHandler}> {props,text} </button>
//   )
// }

const Display = ({counter}) => <div> {counter} </div>
const Button = ({eventHandler, text}) => <button onClick={eventHandler}> {text} </button>

const App = () => {
  const [counter, setCounter] = useState(60)
  // const {counter} = props

  // setTimeout(
  //   () => {
  //     setCounter(counter - 1)
  //   },
  //   1000
  // )

  const decreaseByOne = () => setCounter(counter - 1)
  const setToSixty = () => setCounter(60)

  // const decreaseByOne = () => {
  //   console.log('clicked', 60-counter+1, 'times')
  //   setCounter(counter -1)
  // }
  
  return (
    <div>
      <Display counter = {counter} />
      {/* <button onClick = {decreaseByOne}> Decrease by one </button>
      <button onClick = {setToSixty}> Reset </button> */}

      <Button eventHandler = {decreaseByOne} text = {"Decrease by one"} />
      <Button eventHandler = {setToSixty} text = {"Reset"} />
      
    </div>
  )
}

// let counter = 60

// const refresh = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App counter = {counter}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// setInterval( () => {
// refresh()
// counter -= 1
// if (counter === -1) counter = 60
// }, 1000)
