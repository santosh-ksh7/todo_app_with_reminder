import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';





export function Showalltask({ obj, index, list, setList }) {

  let toup = obj.status === "pending" ? "complete" : "pending";

  let toup2 = obj.reminder === "no" ? "yes" : "no";

  const navigate = useNavigate();

  const style1 = {
    textDecoration: obj.status === "pending" ? "none" : "line-through"
  };

  let reminderid;

  function del() {
    let updatedlist = list.filter((ele) => ele.title !== obj.title);
    setList([...updatedlist]);
  }

  function markascomplete() {
    let updatedarr = list.map((ele) => ele.title === obj.title ? { ...ele, status: toup } : ele);
    setList([...updatedarr]);
  }

  function markaspending() {
    let updatedarr9 = list.map((ele) => ele.title === obj.title ? { ...ele, status: toup } : ele);
    setList([...updatedarr9]);
  }

  function setreminder() {
    let updatedarr2 = list.map((ele) => ele.title === obj.title ? { ...ele, reminder: toup2 } : ele);
    setList([...updatedarr2]);
    let temp1 = Number(prompt("Enter the delay after which you want the reminder in seconds"));
    reminderid = setTimeout(() => {
      let msg = obj.title + " : " + obj.content;
      alert(msg);
      let updatedarr3 = list.map((ele) => ele.title === obj.title ? { ...ele, reminder: "no" } : ele);
      setList([...updatedarr3]);
    }, temp1 * 1000);
  }

  // function delreminder(){
  //   setTimeout(() => {
  //     clearTimeout(reminderid)
  //     let updatedarr7 = list.map((ele) => ele.title===obj.title ? {...ele,reminder:toup2} : ele);
  //     setList([...updatedarr7]);
  //   }, 0*1000);
  // }
  function edit() {
    navigate(`/edit/${obj.title}`);
  }

  return (
    <div className="taskcont">
      <h4 style={style1}>{obj.title}</h4>
      <p style={style1}>{obj.content}</p>
      <div className="crud">

        {obj.status === "pending" ? <Button onClick={() => edit()} startIcon={<EditIcon />} variant="outlined">Edit</Button> : null}

        <Button startIcon={<DeleteIcon />} variant="outlined" onClick={() => del()}>Delete</Button>

        {obj.status === "pending" ? <Button startIcon={<DoneIcon />} variant="outlined" onClick={() => markascomplete()}>Mark as complete</Button> : <Button startIcon={<CloseIcon />} variant="outlined" onClick={() => markaspending()}>Mark as pending</Button>}

        {obj.reminder === "no" && obj.status !== "complete" ? <Button startIcon={<AlarmOnIcon />} variant="outlined" onClick={() => setreminder()}>Create reminder</Button> : null}

        {/* <Button startIcon={<AlarmOffIcon />} variant="outlined" onClick={()=>delreminder()}>Delete reminder</Button> */}

      </div>
    </div>
  );
}
