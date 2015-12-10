import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Landing from '../components/Landing'
import ModelTable from '../components/ModelTable'

export default class ModelContainer extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { children } = this.props
    return(
    <div>
      <Landing/>
      <ModelTable/>
    </div>
  )
  }
}

ModelContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}
