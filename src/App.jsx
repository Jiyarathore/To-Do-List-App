import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    //ye staaet variable Items ko aaray me convert kr diya
    //pn ne Items arry bnaa diya aur us aaray pe laga rhe h map so that apan uske elements ko render kr skte h 

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
            //puraane arraaay ke elements ko aaccess kr rhe h aur naaya aaur naye elements jaaise hi aaa ehe h inputList se unhe lete jaoo
        });

        setInputList('');
        //ab me jo main data jo show jo rhe h list me daalne ke baad usse empty kr do i.e list me add hone ke baad wha phir se placeholder add items show ho jayega

    };

    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>

                    <ol>

                        {Items.map((itemsval, index) => {
                            return <ToDoList
                                key={index}
                                id={index}
                                text={itemsval}
                                onSelect={deleteItems} />;
                        })}
                    </ol>
                </div>

            </div>

        </>
    );

};

export default App;