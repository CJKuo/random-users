import React from 'react';

class App extends React.Component {

   componentWillMount(){
      console.log("LOGGING: Triggered Will Mount")
      fetch('https://randomuser.me/api/?inc=name,email,picture&results=5&nat=us')
      .then(results => {
         return results.json();
      }).then(data => {
         let picture = data.results.map((user) => { return(user.picture.medium) });
         let firstname = data.results.map((user) => { return(user.name.first) });
         let lastname = data.results.map((user) => { return(user.name.last) });
         let email = data.results.map((user) => { return(user.email) });
         this.setState({picture: picture, firstname: firstname, lastname:lastname, email: email});
         let users = data.results
         this.setState({users: users})
      });
   }

   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "name": "cjkuo",
               "email": "cjkuo@somemail.com",
               "picture": "https://www.bing.com/th?id=OIP.yem1P6DvzQVBBZSJeRjW5QHaHa&w=128&h=128&c=7&o=5&dpr=1.25&pid=1.7"
            },
            {
               "name": "cjkuo2",
               "email": "cjkuo2@somemail.com",
               "picture": "https://www.bing.com/th?id=OIP.yem1P6DvzQVBBZSJeRjW5QHaHa&w=128&h=128&c=7&o=5&dpr=1.25&pid=1.7"
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <div align="center">
               <table class="user-table">
                  <tbody>
                     {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                  </tbody>
               </table>
            </div>

            <div align="center">
               <table class="user-table">
                  <tbody>
                     
                  </tbody>
               </table>
            </div>

            {this.state.picture} <br />
            {this.state.firstname} <br />
            {this.state.lastname} <br />
            {this.state.email} <br />
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td class="image-clmn"><img src={this.props.data.picture} class="user-image" /></td>
            <td class="info-clmn"><b>{this.props.data.name} {this.props.data.name}</b> <br /> {this.props.data.email}</td>
         </tr>
      );
   }
}

class TableRowTwo extends React.Component {
   render() {
      return (
         <tr>
            
         </tr>
      );
   }
}



export default App;