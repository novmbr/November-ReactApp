import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

class Query extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      queryText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ queryText: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ loading: true });

    axios
      .get(`http://67.85.105.1:7058/query?q=${this.state.queryText}`)
      .then(response => {
        this.setState({ response: response.data.response });
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ex: What time is it?"
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={this.handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {this.state.loading === true ? (
          <ReactLoading type="spin" color="#000" height={111} width={62.5} />
        ) : (
          ""
        )}
        <h2 className="response">{this.state.response}</h2>
      </React.Fragment>
    );
  }
}

export default Query;
