import React, {Component} from 'react'

class Photo extends Component{
  render(){
    return(
      <div>
        <img src={this.props.post.link}/>
        <h2>{this.props.post.title}</h2>
          <div className='remove-btn'>
            <button>Remove</button>
          </div>
      </div>
    )
  }
}

export default Photo
