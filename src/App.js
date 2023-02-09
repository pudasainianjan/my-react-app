import React, { useEffect } from "react";
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
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

function App() {
  useEffect(() => {
    console.log("hello world!");
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_1686992b8861988240c0a599470eec9a466ff"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>hello world</h1>;
}

export default App;
