import React, { useEffect, useState } from "react";
import Createitem from "./Createitem.js";
import Card from "./Card";

const Itemlist = () => {
  const [show, setShow] = useState(false);
  const [itemList, setitemList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("itemList");

    if (arr) {
      let obj = JSON.parse(arr);
      setitemList(obj);
    }
  }, []);

  const toggle = () => {
    setShow(!show);
  };

  const deleteItem = (index) => {
    let tempList = itemList;
    tempList.splice(index, 1);
    localStorage.setItem("itemList", JSON.stringify(tempList));
    setitemList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = itemList;
    tempList[index] = obj;
    localStorage.setItem("itemList", JSON.stringify(tempList));
    setitemList(tempList);
    window.location.reload();
  };

  const saveItem = (taskObj) => {
    let tempList = itemList;
    tempList.push(taskObj);
    localStorage.setItem("itemList", JSON.stringify(tempList));
    setitemList(tempList);
    setShow(false);
  };

  return (
    <>
      <div className="list-container">
        <div className="header text-center pt-5">
          <h3>ToDo List</h3>
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            {" "}
            Create Item{" "}
          </button>
        </div>
        <div className="item-container">
          {itemList.map((obj, ind) => (
            <Card
              itemObj={obj}
              ind={ind}
              deleteItem={deleteItem}
              updateListArray={updateListArray}
            ></Card>
          ))}
        </div>
      </div>
      <Createitem show={show} toggle={toggle} saveItem={saveItem}></Createitem>
    </>
  );
};
export default Itemlist;
