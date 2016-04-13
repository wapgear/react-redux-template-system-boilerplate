import React from 'react'

import Item from './Item'

export default class DefaultTable extends React.Component {
  render() {
    let {head, items} = this.props;
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            {head && head.map((item) => {
              return(
                <th>{item ? item : '###'}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {items && items.map((item) => {
            return (<Item items={item}/>)
          })}
        </tbody>
      </table>
    )
  }
}
