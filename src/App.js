import React from 'react'
import OneDollar from './component/one';
// import TwoDollar from './component/two';
// import FiveDollar from './component/five';
// import TenDollar from './component/ten';
// import TwentyDollar from './component/twenty';
// import FiftyDollar from './component/fifty';
// import OneHundred from './component/onehundred';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      incrementAmount : 0,
      balance : 0,
       
    }
  }
  // Don't worry about this handler function, it works as it should
  handleIncrementAmount = (e) => {
    this.setState({ incrementAmount: parseInt(e.target.value) })
  }
  handleOnClickIncrease =(e)=>{
    let {balance}= this.state;
    let {incrementAmount}=this.state;
    
    balance= incrementAmount +balance
    
    this.setState({ balance:balance})
  }
  handleOnClickDecrease =(e)=>{
    let {balance}= this.state;
    let {incrementAmount}=this.state;
    
    balance= balance - incrementAmount 
    
    this.setState({ balance:balance})
  }

  render() {
    let {balance} = this.state;
    let {incrementAmount} = this.state;
    return (
      <>
        <h4>Increment Amount: { incrementAmount }</h4>
        <h4>You have $ { balance } in your bank.</h4>
        <hr/>
        <p><input type='text' value={incrementAmount} onChange={this.handleIncrementAmount} /></p>
        <p><button onClick={this.handleOnClickIncrease}>Increase</button> <button onClick={this.handleOnClickDecrease}>Decrease</button></p>
        <OneDollar />
      </>
    )
  }
}

export default App;