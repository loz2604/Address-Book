//Handling Forms and inputs
import React, { useState } from "react"
import "./App.css"



const App = () => {

    const [userInput, setUserInput] = useState("");
    const [userForm, setUserForm] = useState([]);

    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState([]);

    const handleName = (e) => {
        setUserName(e.target.value)
    }
    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = userForm
        formData.push(userInput)
        setUserForm([...formData])
        setUserInput("")

        let name = title;
        name.push(userName)
        setTitle([...title])
        setUserName("")
        console.log(title)
        console.log(formData)
    }


    return (
        <div className="wrapper">
            <form id="form" onSubmit={handleSubmit}>
                <label id="label" htmlFor="name">Enter Name</label>
                <input id="input" placeholder="Name" name="first" type="text" onChange={handleName} value={userName} />
                <label id="label" htmlFor="phone Number">Enter Phone Number</label>
                <input id="input" placeholder="Number" name="second" type="number" onChange={handleInput} value={userInput} />
                <button id="submit" type="submit" >Submit</button>
            </form>
            <div className="bottom">
                <ul>
                    <p>Name</p>
                    {title.map((item, index) => {
                        return <li id="name" key={index}> {item} </li>
                    })}
                </ul>
                <ul>
                    <p>Number</p>
                    {userForm.map((item, index) => {
                        return <li id="number" key={index}> {item} </li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default App;