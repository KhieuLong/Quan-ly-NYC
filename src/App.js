
import './App.css';
import { useState } from "react";
import Qlnyc from './component/dsnyc';
import Form from './component/form';

let listNYC = [
  {
    id: 1,
    name: 'Bùi Tuyết Nhi',
    age: 19,
    gender: 1,
    address: 'Hà Nội',
  },
  {
    id: 2,
    name: 'Hồ Ngọc Hà',
    age: 20,
    gender: 1,
    address: 'Hà Nội',
  },
  {
    id: 3,
    name: 'Thùy Tiên',
    age: 18,
    gender: 1,
    address: 'Hà Nội',
  },
  {
    id: 4,
    name: 'Sơn Tùng - MTP',
    age: 19,
    gender: 0,
    address: 'Thái Bình',
  },
  {
    id: 5,
    name: 'Jack - 5 củ',
    age: 19,
    gender: 0,
    address: 'Bến Tre',
  },
]

let initialObj = {
  id: 0,
  name:'',
  age:'',
  gender:0,
  address:'',
}

function App() {

  let [nyc, setNYC] = useState(listNYC);
  let [obj, setObj] = useState(initialObj) 

  const addNYC = (obj) => {
    let newArr = [...nyc, obj]
    console.log(newArr);
    setNYC(newArr)
  }

  const editData  = (obj)=>{
    console.log(obj);
    setObj({...obj})
  }


  return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Qlnyc editDataFunc={editData} listNYC={nyc} />
          </div>
          <div className="col-4">
            {/* form */}
            <Form obj={obj} addNYC={addNYC} />
          </div>
        </div>
      </div>
    
  );
}

export default App;
