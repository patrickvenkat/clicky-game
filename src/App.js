import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Coffee from "./coffee.json";
import GeneralCard from "./components/GenericCard";

  class App extends Component {

    state = {
      Coffee,
      gameScore: 0,
      highScore: 0,
      clicked: [],
      color: "bg-warning",
      message: "Start the game"
    };

    imageEvent = (id) => {
      // console.log("id" + id);
      if (this.state.clicked.indexOf(id) === -1){
        this.setState({color: "bg-warning"});
        var newGameScore = this.state.gameScore + 1;
        this.setState({ gameScore: newGameScore });
        this.state.clicked.push(id);
        this.setState({clicked: this.state.clicked});
        this.setState({message: "Continue. Great Job!"});
        // console.log(this.state.clicked);
        // console.log("game score" + newGameScore);

        if (newGameScore > this.state.highScore){
          this.setState({ highScore: newGameScore });
        }
        // console.log("highScore" + this.state.highScore);
        this.shuffle(this.state.Coffee);
      }else{
        // console.log("You clicked again on this image with ID = " + id + " Game restarts now" );
        this.setState({message: "Darn. You clicked on that image again. Start over!"});
        this.setState({color: "bg-danger"});
        if (newGameScore > this.state.highScore){
          this.setState({ highScore: newGameScore });
        }
        // console.log("highScore" + this.state.highScore);
        this.setState({ gameScore: 0 });
        this.state.clicked.length = 0;
      }
    };

    shuffle = (imageArray) => {
      for (let i = imageArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
      }
      return imageArray;
    };

    render(){
      return (
      <Wrapper>
        <div className="container">
          <Navbar 
          message={this.state.message}
          score={this.state.gameScore}
          maxScore={this.state.highScore}
          messageColor={this.state.color}
          />
          <Jumbotron />
        </div>
        <Title></Title>
        {this.state.Coffee.map(beverage => (
          <GeneralCard
            imageEvent={this.imageEvent}
            id={beverage.id}
            image={beverage.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
