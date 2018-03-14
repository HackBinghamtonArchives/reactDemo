import React, { Component } from 'react';
import '../css/rocketListContainer.css';

import AddInventoryBtn from '../components/AddInventoryBtn.js'

class RocketComponentListContainer extends Component {

  // this class introduces several key react component features
  // 1) state
  //      using this.state and how you can change state using this.setState
  //      state should be used to store data that the component is working with

  // 2) conditional rendering
  //      only render things that you want the user to see based on the current this.state of the application
  //      You can also render things on other factors like time of day and the browser type

  // 3) .map
  //      use map to iterate over each item in an array and create something using each array value
  //      (bonus! look up .reduce for another really useful array method)

  // 4) event handlers like onChange
  //      use them to deal with changing state or deploy other function
  //      you can set to an anonomous function OR to a function that you define in the class
  //      remember that an arrow function
  //               () => {
  //                       console.log("inside our anon function")
  //                      }
  //      is very very similar to an anonomous function
  //          function() {
  //                        console.log("inside our anon function")
  //                     }

  // 5) using other components within this component -- the AddInventoryBtn
  //      You can pass props (think properties) down to the component for it to work with
  //      you can pass any data type as a prop including functions!
  //      dont forget to bind the 'this' keyword in the constructor to functions you define!
  constructor(props){
    super(props);
    this.incrementInventory = this.incrementInventory.bind(this)
    this.state = {
      userName: "",
      rocketRequirements: ["Liquid Oxygen (LOX)",
                            "Refined Kerosene (RP-1)",
                            "Titanium Gridfins",
                            "9 Merlin D engines",
                            "1 Merlin D Vacuum Engine",
                            "Lots of C++ Engineers"
                          ],
      rocketInventory:     [ {
                              name: "Liquid Oxygen (LOX)",
                              inventory: 23,
                              id: 1
                            },
                            {
                              name: "Refined Kerosene (RP-1)",
                              inventory: 1000,
                              id: 2
                            },
                            {
                              name: "Titanium Gridfins",
                              inventory: 2,
                              id: 3
                            },
                            {
                              name: "9 Merlin D engines",
                              inventory: 2,
                              id: 4
                            },
                            {
                              name: "1 Merlin D Vacuum Engine",
                              inventory: 0,
                              id: 5
                            },
                            {
                              name: "Lots of C++ Engineers",
                              inventory: 50,
                              id: 6
                            },
                            {
                              name: "Payload Fairing",
                              inventory: 0,
                              id: 7
                            }
                          ]
    }
  }

  incrementInventory(itemId) {
    var workingRocketInventory = [...this.state.rocketInventory];
    console.log(workingRocketInventory);
    console.log("adding 1 to " + itemId + "'s stockpile");
    workingRocketInventory.find(x => x.id === itemId).inventory += 1
    this.setState({rocketInventory: workingRocketInventory})

  }

  render() {

    // lets see if the user already put in their Name
    // if they have, no need to render the form!
    var form;
    if (this.state.userName.length > 12) {
      form = null;
    } else {
      form = (<input type="text" onChange={(e) => { // e stands for event
        this.setState({userName: e.target.value})
      }}/>)
    }

    // this is another way to do the if statement above!
    // its called a ternary operator. the value after the question mark gets set
    // to form if the condition is true and the value after the colon gets set if the expression at the beginning is false
    // comment out the if statement above and give the ternary out!
    // var form = this.state.userName.length > 12 ? null : (
    //   <input type="text" onChange={(e) => { // e stands for event
    //     this.setState({userName: e.target.value})
    //   }}/>
    // )

    return (
      <div className="container">
        <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3NC8yMTIvb3JpZ2luYWwvc3BhY2V4LWZhbGNvbi05LWF0LXZhbmRlbmJlcmcuanBn" />
        <br />

        {form}

        <p>Hi {this.state.userName}! We have 3 things to buy!</p>
        <ol>
          {this.state.rocketRequirements.map((item) => {
            return <li>{item}</li> // remember that this is still jsx so we need the {} to access the item
          })}
          {/*<li>Liquid Oxygen (LOX)</li>
          <li>Refined Kerosene (RP-1)</li>
          <li>Titanium Gridfins</li>
          <li>9 Merlin D engines</li>
          <li>Lots of C++ Engineers</li>*/}
          {/*<li>Notice how when we change something it shows up when we save!</li>*/}
        </ol>

        <p>See below for our current inventory</p>
        <p>Make sure to add to our inventory when you buy something</p>
        <table>
          <tr>
            <th>Part Name</th>
            <th>Amount we have</th>
          </tr>
          {this.state.rocketInventory.map((partObject) => {
              return (<tr>
                        <td>{partObject.name}</td>
                        <td style={{"text-align": "center"}}>
                          {partObject.inventory} <AddInventoryBtn
                                                      partId={partObject.id}
                                                      incrementInventory={this.incrementInventory}
                                                  />
                        </td>
                      </tr>)
            })
          }
        </table>

      </div>
    )
  }
}

export default RocketComponentListContainer;
