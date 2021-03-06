import React, { Component, Fragment } from 'react'
import axios from "axios";
import './App.css';
import Info from "./Components/Info";
import Repo from "./Components/Repo";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      user: {},
      repos: []
    }
  }

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = () => {
    axios.get(`http://api.github.com/users/${this.state.search !== '' ? this.state.search : 'SamerZenklo'}?client_id=0acab90c5885165e2a64&client_secret=a5ba18c4421d53279220dc4dd150d2704be61d60&sort=created`)
      .then(res => {
        this.setState({ user: res.data })
        console.log(res.data);
        this.getRepos()
      })
      .catch(err => console.log(err))
  }

  getRepos = () => {
    axios.get(`${this.state.user.repos_url}`)
      .then(res => {
        this.setState({ repos: res.data })
      })
      .catch(err => console.log(err))
  }
  onChange = (e) => {
    this.setState({ search: e.target.value })
  }

  onClick = () => {
    this.getUserData()
  }
  render() {
    return (
      <div className="App">
        <div className="search">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
          </div>
          <input type="text" class="form-control col-4" name="search" onChange={this.onChange} value={this.state.search} />
          <button className="btn btn-primary" onClick={this.onClick}>search</button>
        </div>
        <div className="user">
          <div className="img">
            <img src={this.state.user.avatar_url} alt="" />
            {/* <img src="data:image/jpeg;base64,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"/> */}
          </div>
          <Info user={this.state.user} />
        </div>
        <div className="repos">
          <h3>User Repositories:</h3>
          {this.state.repos.map(repo =>
            <Fragment key={repo.id}>
              <Repo repo={repo} />
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default App;
