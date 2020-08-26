import React from "react";
import "./App.css";
import axios from "axios";
import {Header, Icon, List, Item} from 'semantic-ui-react';

class App extends React.Component {
  state = {
    values: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((res) => {
      this.setState({
        values: res.data,
      });
    });
  }

    render() {
        return (
            <div>
                <Header as="h2">
                    <Icon className="braille" />
                    <Header.Content>uptime guarant</Header.Content>
                </Header>
                <List>
                    {this.state.values.map((v: any) => (
                        <Item key={v.id}>{v.name}</Item>
                    ))}
                </List>
            </div>
        )
    }
}

export default App;
