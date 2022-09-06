import './App.css';
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import { Home } from './Home';
import { Edit } from './Edit';


function App() {

  let dataset1 = [
    {
      // id:0,
      title:"Get Started 1",
      content:"Quickly create notes 1",
      reminder: "no",
      status: "pending"
    },
    {
      // id:1,
      title:"Get Started 2",
      content:"Quickly create notes 2",
      reminder: "no",
      status: "complete"
    },
    {
      // id:2,
      title:"Get Started 3",
      content:"Quickly create notes 3",
      reminder: "no",
      status: "pending"
    }
  ]

  const [list, setList] = useState(dataset1);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home list={list} setList={setList} />}   />
        <Route path='/edit/:tasktitle' element={<Edit list={list} setList={setList} />}   />
      </Routes>
    </div>
  );
}

export default App;





