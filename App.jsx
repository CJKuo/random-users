import React from 'react';

class App extends React.Component {
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
         <div align="center">
            <table class="user-table">
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td><img src={this.props.data.picture} class="user-image" /></td>
            <td>{this.props.data.name} <br /> {this.props.data.email}</td>
         </tr>
      );
   }
}

export default App;