import React, {Component} from 'react'
import Photo from './Photo'

class Photowall extends Component{
  constructor(){
    super()
    this.state = {
      posts: [
        {title: "Test", link: "https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg"},
        {title: "Test2", link: "https://9to5google.com/wp-content/uploads/sites/4/2019/01/google_logo_1.jpg?quality=82&strip=all&w=1600"},
      ]
    }
  }
  render(){
    return(
      <div className='container'>
        <div className="row">
            {this.state.posts.map((post,ind) => <div className="col-md-5 photo-col"><Photo post={post} key={ind}/></div>)}
      </div>
    </div>
    )
  }
}

export default Photowall
