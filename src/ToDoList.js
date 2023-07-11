import { Component } from "react";
import check from './check.png';

export default class ToDoList extends Component {
    state = {
        userInput: '',
        taskList: []

    }
    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    addItem(input) {
        if (input === '') {
            alert("Please enter an item.")
        } else {
            let listArray = this.state.taskList
            listArray.push(input)
            this.setState({taskList: listArray, userInput: ''})
        }
        
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed")
    }
    deleteItem() {
        let listArray = this.state.taskList
        listArray = [];
        this.setState({taskList: listArray})
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input 
                    type="text"
                    placeholder="Things to do today"
                    onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                />
            </div>
            <div className="container">
                <button className="btn addBtn" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.taskList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="20px" alt="icon"/>
                    {item}</li>
                ))}
            </ul>
            <div className="container">
                <button className="btn delBtn" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
            </div>
            </form>
        </div>
    }
}