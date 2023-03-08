import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }

    componentDidMount() {
        this.handleStatus();
      }
    
      handleStatus() {
        axios
          .get(`http://localhost:8080`)
          .then(res => {
              console.log(res);
              this.setState({ content : res.data })
          })
          .catch(err => console.log(err));
      }

    render() {
        return (
            <div>
                <a>{this.state.content}</a>
            </div>
        );
    }
}

export default Test;