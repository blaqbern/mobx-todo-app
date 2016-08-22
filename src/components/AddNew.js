import React, { Component } from 'react'

export default class AddNew extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleKeyPress(event) {
    if (event.charCode === 13) this.submit()
  }
  submit() {
    this.props.handleClick(this.state.value)
    this.setState({ value: '' })
  }
  render() {
    const { value } = this.state
    return (
      <div>
        <input value={value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        <button onClick={this.submit}>+</button>
      </div>
    )
  }
}
const { func } = React.PropTypes
AddNew.propTypes = { handleClick: func }
