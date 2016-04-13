import React from 'react'
import DevTools from './containers/DevTools'

require("../assets/fonts/font-awesome/css/font-awesome.min.css");
require("../assets/css/styles.css");
require("../assets/css/custom.css");


export default class Init extends React.Component {
  componentWillMount() {
    this.setState({})
  }

  render() {
    return (<div>
              <DevTools />
              {this.props.children}
            </div>)
  }
}
