import React, { Component } from 'react'
import "./style.css"
import Contacts from "./Contacts"
const contacts = [{
   firstName: "Барней",
   lastName: "Стинсовський",
   phone: "+380956319521",
   gender: "male"
}, {
   firstName: "Робін",
   lastName: "Щербатська",
   phone: "+380931460123",
   gender: "female"
}, {
   firstName: "Анонімний",
   lastName: "Анонімус",
   phone: "+380666666666"
}, {
   firstName: "Лілія",
   lastName: "Олдровна",
   phone: "+380504691254",
   gender: "female"
}, {
   firstName: "Маршен",
   lastName: "Еріксонян",
   phone: "+380739432123",
   gender: "male"
}, {
   firstName: "Теодор",
   lastName: "Мотсбес",
   phone: "+380956319521",
   gender: "male"
}]

class Contracts extends Component {
   state = {
      contacts: contacts,
      change: ''
   }
   
   handleSearchChange = e => {
      const neededContact = contacts.filter(contact => (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(e.target.value.toLowerCase()) ||
         (contact.phone).includes(e.target.value))
      this.setState({ contacts: neededContact })
      this.setState({ search: e.target.value })
      
      
   }
   render() {
      return (
         <div className="names">
            <input type="text" placeholder="Пошук" value={this.state.search} onChange={this.handleSearchChange}></input>
            <p>{this.state.contacts.map((con, i) => <Contacts {...con} />)}</p>
      </div>
   )
}
}
export default Contracts





// import TopPanel from "./TopPanel.js"
// import AddPost from "./AddPost.js"
// import Post from "./Post"



// class CreatePostPage extends Component {
//    state = {
//    posts: []
//    }
//    addDataPost = data => {
//       this.setState({ posts: this.state.posts.concat(data) })
//       console.log(this.state.posts)
//    }
//    render() {
//       return (
//          <div>
//             <TopPanel />
//             <AddPost addDataPost = {this.addDataPost} />
//             <div className = 'post'>
//                {this.state.posts.map((post, i) => <Post post={post} />)}
              
//             </div>
            
//          </div>
//       )
//    }
// }
// export default CreatePostPage