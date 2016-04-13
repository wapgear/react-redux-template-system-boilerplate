import React from 'react'

export default class DefaultItem extends React.Component {
  render() {
    let {items} = this.props;
    return(
      <tr>
        {items && items.map((item) => {return(<td>{item}</td>)})}
      </tr>
    )
  }
}
