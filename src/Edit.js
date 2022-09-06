import { useParams } from "react-router-dom";
import { Edittaskform } from "./Edittaskform";

export function Edit({ list, setList }) {


  const { tasktitle } = useParams();

  let obj = list.filter((ele) => ele.title === tasktitle);
  obj = obj[0];
  // console.log(obj);
  return (
    <div>
      {obj !== undefined ? <Edittaskform obj={obj} list={list} setList={setList} /> : "Loading edit form......"}
    </div>
  );
}
