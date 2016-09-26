const React= require('react')

class Keypad extends React.Component{
  constructor(){
    super()
    this.setInput=this.setInput.bind(this)
  }

  setInput(){
    console.log("Entering password...")
  }


  render(){
    return(
      <input type="password" onKeyUp={this.setInput}/>
    )
  }

};

module.exports=Keypad
