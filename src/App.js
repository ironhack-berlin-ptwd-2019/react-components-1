import React, { Component } from "react";
import "./App.css";
import Chat from './Chat'
import ReactPlayer from 'react-player'

class App extends Component {
  render() {



    const formatName = (user) => {
      return <p>{user.firstName} {user.lastName}</p>
    }

    const myuser = {
      firstName: 'Petra',
      lastName: 'Pan'
    }

    const element = (
      <h2>
        Hello, {formatName(myuser)}!
      </h2>
    );

    // const divThing = <div className="test">Bla</div>
    // console.log(divThing)

    return (
      <div className="test">
        {element}
        <ReactPlayer url={"https://vimeo.com/channels/top/22439234"} playing={true} />
        <Chat username="Hendrik1" color="blue" array={[9, 8, 7]} />
        <Chat username="Hendrik0" color="red" array={[9, 8, 7]} />
      </div>
    );
  }
}

export default App;