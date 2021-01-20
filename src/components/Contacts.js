import React from 'react'
import "./style.css"


function Contacts(props){
   console.log(props)
   let gender
   if (props.gender === "male") {
      gender = '\u2642'
   } else if (props.gender === "female") {
      gender = '\u2640'
   } else {
      gender = '\u00D7'
   }

   return (
      <div className = "contact-block">
         <p>{props.firstName} {props.lastName}</p>
         
         <p>{props.phone}</p>
         <span className="gender">{gender }</span>
         
      </div>
   )
   
}
export default Contacts


// class AddPost extends Component {
//    state = {
//       text: "",
//       name: ""
//    }
  
  
//    changeText = e => {
//       this.setState({ text: e.target.value })
//    }
//    changeName = e => {
//       this.setState({ name: e.target.value })
//    }
   
//    addPost = () => {
//       const data = {
//          name: this.state.name,
//          tasks: this.state.text
//       }
//       if (this.state.name !== "" && this.state.text !== "") {
//          this.props.addDataPost(data)
//          this.setState({ name:"",text:""})
//       }
   
//    }
//    render() {
//       return (
//          <div className="add-post">
//             <input type="text" value={this.state.text} onChange = {this.changeText}/>
//             <input type="text" value={this.state.name} onChange={this.changeName}/>
//             <button className='add-post-button' onClick={this.addPost}>Додати</button>
//             {/* <p>{ this.state.text}</p> */}
//          </div>
//       )
//    }
// }

// export default AddPost