import React from "react";
import {v4 as uuidv4} from "uuid";

const todos=[
    {
        id : uuidv4(),
        title : "title1",
        desc : "Descrribtion1"
    },
    {
        id : uuidv4(),
        title : "title2",
        desc : "Descrribtion2"
    },
    {
        id : uuidv4(),
        title : "title3",
        desc : "Descrribtion3"
    },
    {
        id : uuidv4(),
        title : "title4",
        desc : "Descrribtion4"
    }


];

const List=()=>{
    return <div>
       
        {todos.map((todo)=>{
             const {id, title,desc}=todo;
            return <div key={id}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
        }
        )}
    </div>
};
export default List;
