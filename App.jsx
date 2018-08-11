import React from 'react';

class App extends React.Component {
   constructor() {
      super();
   }
   render() {
      return (
         <Table />
      );
   }
}

class Table extends React.Component {
   constructor(){
      super();
      this.state = {
         users: []
      }
   }

   componentDidMount(){
      fetch('https://randomuser.me/api/?inc=name,email,picture&results=1000&nat=us')
      .then(results => {
         return results.json();
      }).then(data => {
         let users = data.results.map((user) => { 
            return(
               <tr>
                  <td class="image-clmn"><img src={user.picture.medium} class="user-image" /></td>
                  <td class="info-clmn"><b>{user.name.first} {user.name.last}</b> <br /> {user.email}</td>
               </tr>
            )
         });
         this.setState({users: users});
      });
   }

   render() {
      return(
         <div align="center">
            <table class="user-table">
               <tbody>
                  {this.state.users}
               </tbody>
            </table>
         </div>
      )
   }
}
   
export default App;