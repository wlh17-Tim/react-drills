import React, {Component} from 'react';
import './App.css';
import Image from "./Component/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://http.cat/409"} />
      </div>
  );
}
}

export default App;
