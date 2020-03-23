import React, {useState} from "react";
import jwtDecode from "jwt-decode";

export default function () {
    const [input, setInput] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [inputDescription, setInputDescription] = useState([]);

    const handleInput = e => setInput(e.target.value);
    const handleInputDescription = e => setInputDescription(e.target.value);

    const onSubmit = async () => {
        let token = window.localStorage.getItem('token');
        let token_decode = jwtDecode(token);
        if (input !== '') {
            const newToDo = {
                title: input,
                description: inputDescription,
            };
            await fetch("https://candidate.neversitup.com/todo/todos/"+{token_decode}, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: input,
                    description: inputDescription,
                })
            })
                .then(resp => resp.json())
                .then(data => {
                });
            const newToDoList = toDoList.concat(newToDo);
            setToDoList(newToDoList);
            setInput('');
            setInputDescription('');
        } else {
            alert("Please input data.")
        }
    };

    const onDelete = (index) => {
        const newToDoList = toDoList;
        newToDoList.splice(index, 1);
        setToDoList([...newToDoList])
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className="form-group">
                        <h3>Title</h3>
                        <input type="text" className="form-control"
                               placeholder="Enter to do list."
                               onChange={handleInput}
                               value={input}/>
                    </div>
                    <div className="form-group">
                        <h3>Description</h3>
                        <input type="text" className="form-control"
                               placeholder="Enter to do list."
                               onChange={handleInputDescription}
                               value={inputDescription}/>
                    </div>
                    <button className="btn btn-outline-primary" onClick={onSubmit}>Submit</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <table className="table-bordered table-hover">
                        <thead>
                        <tr>
                            <th width="500" className="text-center">Title</th>
                            <th width="500" className="text-center">Description</th>
                            <th width="200"/>
                        </tr>
                        </thead>

                        {
                            toDoList.map((todo, i) => {
                                return (
                                    <tbody key={i}>
                                    <tr>
                                        <td className="text-center">{todo.title}</td>
                                        <td className="text-center">{todo.description}</td>
                                        <td className="text-center">
                                            <button className="btn btn-outline-danger mt-3 mb-3" onClick={() => onDelete(i)}>Delete</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
};
