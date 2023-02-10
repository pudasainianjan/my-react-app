import React, { useState, useEffect } from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     console.log("this component mounted");
//     this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
//   }

//   componentDidUpdate() {
//     console.log("this component updated");
//   }

//   // tick = () => {

//   // };

//   render() {
//     return (
//       <div>
//         {/* <h1>Hello, world!</h1> */}
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("this component is updated");
  });
  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
  }, []);
  useEffect(() => {}, [date]);
  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
