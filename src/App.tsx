import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  let [text,setText] = useState<any>();
  let [list,setList] = useState<any>([]);

  function del(i:any) {
    list.splice(i,1);
    setList([...list]);
  }

  function edit (i:any) {
    let newTxt = prompt("Enter new text");
    list[i] = newTxt;
    setList([...list]);
  }

  function delAll () {
    setList([]);
  }

  document.body.style.backgroundColor = "#3ebd9d";

  return (
    <div className="App">

      <div className='d-flex mt-3 w-50 m-auto justify-content-center'>

        <input type="text" onChange={((e) => {
          setText(e.target.value);
        })} 
        className='me-2 w-50 p-1 ps-2'/>

        <button onClick={() => {
          list.push(text);
          setList([...list]);
        }}
        className='btn btn-primary me-2'>
          Add
        </button>

        <button onClick={() => {
          delAll()
        }}
        className='btn btn-danger'>
          Delete All
        </button>

        </div>

        <div className='mt-5'>

        {list.map((e:any, i:any) => {
          return(
            <p key={i}
            className='pera'>{e}
            
              <div>

                <button onClick={() => {
                  edit(i)
                }}
                className='btn btn-success'>
                  Edit
                </button>
            
                <button onClick={() => {
                  del(i)
                }}
                className='btn btn-dark ms-2'>
                  Delete
                </button>
            
              </div>
            
            </p>
          )
        })}

        </div>

    </div>
  );
}

export default App;
