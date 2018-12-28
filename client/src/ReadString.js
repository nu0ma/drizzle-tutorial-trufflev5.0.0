import React from "react";

class ReadString extends React.Component {

  state =  {dateKey: null};

  componentDidMount() {
    // const { drizzle, drizzleState } = this.props;
    // console.log(drizzle);
    // console.log(drizzleState);
    //test
    const {drizzle} = this.props;
    const contract =  drizzle.contracts.MyStringStore;

    // let drizzle know we want to wathc the "myString method"
    const dataKey = contract.methods["myString"].cacheCall();

    //save the "dateKey" to local component state for later reference
    this.setState({dataKey})
  }

  render() {
    // get the contract state from drizzleState
    const {MyStringStore} =  this.props.drizzleState.contracts;

    // using the saved "dataKey" , get the variable we're interested in
    const myString = MyStringStore.myString[this.state.dataKey]

    // if it exists, then we display its value
    return <p>My stored string:{myString && myString.value}</p>;
  }
}

export default ReadString;