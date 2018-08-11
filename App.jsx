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
                  <td class="image-clmn" align="center"><img src={user.picture.thumbnail} class="user-image" /></td>
                  <td class="info-clmn"><b>{Cap(user.name.first)} {Cap(user.name.last)}</b> <br /> {user.email}</td>
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

function Cap(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
   
export default App;