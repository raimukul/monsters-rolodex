import React, { Component } from "react";
import { CardList } from "./components/card-list/Card-List.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleChange=this.handleChange.bind()

  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
            // console.log(this.state);
          }}
        />
        {/* <input type='search' placeholder="search monsters" onChange={e => console.log(e.target.value) }></input> */}
        {/* <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
            console.log(this.state);
          }}
        /> */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
