// import React, {
//     // Component,
//     useState
// } from 'react';
//
// import './App.css';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: '',
//             toDoList: [],
//         };
//         this.handleInput = this.handleInput.bind(this);
//         this.pushArray = this.pushArray.bind(this);
//         this.onCheck = this.onCheck.bind(this);
//     }
//
//     handleInput(e) {
//         this.setState({
//             input: e.target.value
//         })
//     }
//
//     onCheck(index) {
//         let list = this.state.toDoList;
//         let newList = list.map((todo, i) => {
//             if (index === i) {
//                 return ({
//                         ...todo, check: !todo.check
//                     }
//                 )
//             } else {
//                 return todo;
//             }
//         });
//
//         this.setState({
//             toDoList: newList,
//         })
//     }
//
//     pushArray() {
//         let toDoList = this.state.toDoList;
//         this.setState({
//             toDoList: toDoList.concat({name: this.state.input, check: false}),
//             input: ''
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text"
//                        onChange={this.handleInput}
//                        value={this.state.input}
//                 />
//                 <button onClick={() => this.pushArray()}>Submit</button>
//
//                 {
//                     this.state.toDoList.map((todo, i) => {
//                         return (
//                             <li key={i}>
//                                 <input type="checkbox" onChange={(e) => this.onCheck(i)}
//                                        checked={todo.check}/>
//                                 {todo.name}
//                             </li>
//                         )
//                     })
//                 }
//             </div>
//         );
//     }
// }
//export default App;

//useState
// export default function () {
//     const [input, setInput] = useState('');
//     const [toDoList, setToDoList] = useState([]);
//
//     const handleInput = e => setInput(e.target.value);
//     const onSubmit = () => {
//         if (input !== '') {
//             const newToDo = {
//                 name: input,
//                 check: false
//             };
//             const newToDoList = toDoList.concat(newToDo);
//             setToDoList(newToDoList);
//             setInput('')
//         } else {
//             alert("Please input data.")
//         }
//     };
//
//     const onDelete = (index) => {
//         const newToDoList = toDoList.map((todo, i) => {
//             if (index === i) {
//                 return ({
//                     ...todo, check: !todo.check
//                 })
//             } else {
//                 return (todo)
//             }
//         });
//         setToDoList(newToDoList)
//     };
//
//     const onCheck = (index) => {
//         const newToDoList = toDoList.map((todo, i) => {
//             if (index === i) {
//                 return ({
//                     ...todo, check: !todo.check
//                 })
//             } else {
//                 return (todo)
//             }
//         });
//         setToDoList(newToDoList)
//     };
//
//     return (
//         <div className="container">
//             <div className="row mt-5">
//                 <div className="col">
//                     <div className="form-group">
//                         <h3>ToDoList</h3>
//                         <input type="text" className="form-control"
//                                placeholder="Enter to do list."
//                                onChange={handleInput}
//                                value={input}/>
//                     </div>
//                     <button className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
//                 </div>
//             </div>
//             <div className="row mt-5">
//                 <div className="col">
//                     <table className="table-bordered table-hover">
//                         <thead>
//                         <tr>
//                             <th width="150" className="text-center">Check list</th>
//                             <th width="500" className="text-center">List</th>
//                             <th width="200"/>
//                         </tr>
//                         </thead>
//
//                         {
//                             toDoList.map((todo, i) => {
//                                 return (
//                                     <tbody key={i}>
//                                     <tr>
//                                         <td>
//                                             <input type="checkbox"
//                                                    className="form-control"
//                                                    onChange={() => onCheck(i)}
//                                                    checked={todo.check}/>
//                                         </td>
//                                         <td className="text-center">{todo.name}</td>
//                                         <td className="text-center">
//                                             <button className="btn btn-outline-danger mt-3 mb-3" onClick={() => onDelete(i)}>Delete</button>
//                                         </td>
//                                     </tr>
//                                     </tbody>
//                                 )
//                             })
//                         }
//                     </table>
//
//                 </div>
//             </div>
//         </div>
//     )
// };
//useState

import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";

import Login from "./screen/login/form";
import ToDoList from "./screen/toDolList/list";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/to-do-list" component={ToDoList}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
