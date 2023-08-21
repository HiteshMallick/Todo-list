import React, { useState } from "react";

function Todo() {
  const [addValue, setAddValue] = useState("");
  const [listData, setlistData] = useState([]);

  function addActivity() {
    setlistData((listData) => {
      const updateList = [...listData, addValue];
      setAddValue("");
      return updateList;
    });
  }

  function removeActivity(index){
    const updateListData = listData.filter((elem, id)=>{
      return index!=id;
    })
    setlistData(updateListData)
  }

  function removeAll(){
    setlistData([])
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
        />
        <button onClick={addActivity}>ADD</button>
        <p className="list-heading">Here is your List</p>

        {listData !=[] &&
          listData.map((data, index) => {
            return (
              <div key={index}>
                <div className="listData">{data}</div>
                <button className="btn-position" onClick={()=>removeActivity(index)}>remove</button>
              </div>
              
            );
          })}
          {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
          
      </div>
    </>
  );
}

export default Todo;
