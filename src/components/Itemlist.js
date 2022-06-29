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

  const saveItem = (taskObj) => {
    let tempList = itemList;
    tempList.push(taskObj);
    localStorage.setItem("itemList", JSON.stringify(tempList));
    setitemList(itemList);
    setShow(false);
  };

  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="header text-center mt-3">
        <h3>ToDo List</h3>
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          {" "}
          Create Item{" "}
        </button>
      </div>
      <div className="item-container">
        {itemList.map((obj) => (
          <li>{obj.name}</li>
        ))}
      </div>
      <Createitem show={show} toggle={toggle} saveItem={saveItem}></Createitem>
    </>
  );
};
export default Itemlist;
