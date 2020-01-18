import React, {Component} from 'react'
import Title from './Title'
import Photowall from './Photowall'
import '../Styles/stylesheet.scss'

class Main extends Component{
  render(){
    return (
      <div className="main-div">
        <Title />
        <Photowall />
      </div>
    )
  }
}

export default Main
