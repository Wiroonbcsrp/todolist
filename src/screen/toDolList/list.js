import React, {useState} from "react";

export default function () {
    const [input, setInput] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [inputDescription, setInputDescription] = useState([]);

    const handleInput = e => setInput(e.target.value);
    const handleInputDescription = e => setInputDescription(e.target.value);
    const onSubmit = () => {
        if (input !== '' && inputDescription !== '') {
            const newToDo = {
                title: input,
                description: inputDescription,
                check: false
            };
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

    const onCheck = (index) => {
        const newToDoList = toDoList.map((todo, i) => {
            if (index === i) {
                return ({
                    ...todo, check: !todo.check
                })
            } else {
                return (todo)
            }
        });
        setToDoList(newToDoList)
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
                            <th width="150" className="text-center">Check list</th>
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
                                        <td>
                                            <input type="checkbox"
                                                   className="form-control"
                                                   onChange={() => onCheck(i)}
                                                   checked={todo.check}/>
                                        </td>
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
