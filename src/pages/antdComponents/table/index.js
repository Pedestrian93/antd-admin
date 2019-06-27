import React, { Component } from 'react'

export default class index extends Component {
  fetch = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        console.log(response)
        response.json()
      })
      .then(json => console.log(json))
  }

  render() {
    this.fetch()
    return <div>table</div>
  }
}
