import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Coffee from "./coffee.json";
import GeneralCard from "./components/GenericCard";

// function App() {
  class App extends Component {

    state = {
      Coffee,
      gameScore: 0,
      highScore: 0,
      clicked: [],
      message: "Start the game"
    };

      // handleIncrement increments this.state.count by 1
    imageEvent = (id) => {
      console.log("id" + id);
      if (this.state.clicked.indexOf(id) === -1){
        var newGameScore = this.state.gameScore + 1;
        this.setState({ gameScore: newGameScore });
        this.state.clicked.push(id);
        this.setState({clicked: this.state.clicked});
        this.state.message = "Continue. Great Job!"
        this.setState({message: this.state.message});
        console.log(this.state.clicked);
        console.log("game score" + newGameScore);

        if (newGameScore > this.state.highScore){
          this.setState({ highScore: newGameScore });
        }
        console.log("highScore" + this.state.highScore);
        this.shuffle(this.state.Coffee);
      }else{
        console.log("You clicked again on this image with ID = " + id + " Game restarts now" );
        this.state.message = "Darn. You clicked on that image again. Start over"
        this.setState({message: this.state.message});
        if (newGameScore > this.state.highScore){
          this.setState({ highScore: newGameScore });
        }
        console.log("highScore" + this.state.highScore);
        this.setState({ gameScore: 0 });
        this.state.clicked.length = 0;
      }
    };

    shuffle = (imageArray) => {
      for (let i = imageArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
      }
      // console.log(imageArray);
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
          />
          <Jumbotron />
        </div>
        <Title></Title>
        {/* <GeneralCard  */}
        {this.state.Coffee.map(beverage => (
          <GeneralCard
            // removeFriend={this.removeFriend}
            imageEvent={this.imageEvent}
            id={beverage.id}
            image={beverage.image}
          />
        ))}
        
        {/* name={Coffee[0].name}
        image={Coffee[0].image}
        occupation= {Coffee[0].occupation}
        location= {Coffee[0].location}/>
        <GeneralCard 
        name={Coffee[1].name}
        image={Coffee[1].image}
        occupation= {Coffee[1].occupation}
        location= {Coffee[1].location}
        />
        <GeneralCard 
        name={Coffee[2].name}
        image={Coffee[2].image}
        occupation= {Coffee[2].occupation}
        location= {Coffee[2].location}
        />
        <GeneralCard 
        name={Coffee[3].name}
        image={Coffee[3].image}
        occupation= {Coffee[3].occupation}
        location= {Coffee[3].location}
        />
        <GeneralCard 
        name={Coffee[4].name}
        image={Coffee[4].image}
        occupation= {Coffee[4].occupation}
        location= {Coffee[4].location}
        />
        <GeneralCard 
        name={Coffee[5].name}
        image={Coffee[5].image}
        occupation= {Coffee[5].occupation}
        location= {Coffee[5].location}
        />
        <GeneralCard 
        name={Coffee[6].name}
        image={Coffee[6].image}
        occupation= {Coffee[6].occupation}
        location= {Coffee[6].location}
        />
        <GeneralCard 
        name={Coffee[7].name}
        image={Coffee[7].image}
        occupation= {Coffee[7].occupation}
        location= {Coffee[7].location}
        />
        <GeneralCard 
        name={Coffee[8].name}
        image={Coffee[8].image}
        occupation= {Coffee[8].occupation}
        location= {Coffee[8].location}
        />
        <GeneralCard 
        name={Coffee[9].name}
        image={Coffee[9].image}
        occupation= {Coffee[9].occupation}
        location= {Coffee[9].location}
        />
        <GeneralCard 
        name={Coffee[10].name}
        image={Coffee[10].image}
        occupation= {Coffee[10].occupation}
        location= {Coffee[10].location}
        />
        <GeneralCard 
        name={Coffee[11].name}
        image={Coffee[11].image}
        occupation= {Coffee[11].occupation}
        location= {Coffee[11].location}
        /> */}
      </Wrapper>
    );
  }
}

export default App;
