import React from "react";
import GetData from "../api-integration/GatData";

const TodoList = () => {
    return (
        <div>
            <h1>ToDoList</h1>
            <GetData/>
        </div>
    );
}

export default TodoList;