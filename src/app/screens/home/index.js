import React, { Component } from 'react';
import Template from '../../components/complex/Template';
import { TextField } from '@material-ui/core';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      keyword: '',
      showError: false,
      errorMsg: '',
    }
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
  }

  render () {
    const {
      keyword,
      showError,
      errorMsg,
    } = this.state;

    return (
      <Template title="City">
        <TextField
          id="standard-name"
          label="Search by city"
          value={keyword}
          margin="normal"
          fullWidth
        />
      </Template>
    );
  }
}

export default Home;