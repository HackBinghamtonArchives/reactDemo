import React, {Component} from 'react';
import "../css/addInventoryBtn.css";

export default class AddInventoryBtn extends Component{
  // you can access props via this.props
  // remember that this component should get 2 props
  //    partId (int)
  //    incrementInventory (fn)
  // there are ways to enforce that a prop exists but you can google how to do that

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="incBtn" onClick={() => {
        this.props.incrementInventory(this.props.partId);
      }}>+</button>
    )
  }
}
