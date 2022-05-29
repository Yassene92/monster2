import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./compnents/card-list/card-list.compnent";
import SearchBox from "./compnents/search-box/search-box.component";

import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchFielf] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/users")
    //  .then((Response) => Response.json())
    //  .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setfilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFielf(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Robot Monster</h1>
      <SearchBox
        className="monster-search-box"
        onChange={onSearchChange}
        placeholder="search monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
      <h1 className="app-title">Robot Monster</h1>
        <SearchBox
          className="search-box"
          onChange={onSearchChange}
          placeholder="search monster"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
*/
export default App;
