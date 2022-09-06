import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import { Showalltask } from "./Showalltask";
import { Showselectedtask } from "./Showselectedtask";

export function Home({ list, setList }) {
  // const[ctitle, setCtitle] = useState("")
  // const[cdes, setCdes] = useState("")

  const createtaskschema = yup.object({
    title: yup.string().required().min(1),
    content: yup.string().required().min(5)
  });

  const [pending, setPending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [reminder, setReminder] = useState(false);

  const formik = useFormik({
    initialValues: { title: "", content: "" },
    validationSchema: createtaskschema,
    onSubmit: function (values) {
      let newtask = {
        ...values,
        status: "pending",
        reminder: "no"
      };
      // console.log(newtask);
      setList([...list, newtask]);
      formik.resetForm();
    }
  });


  // function create(){
  //   let newtask = {
  //     title: ctitle,
  //     content: cdes,
  //     status: "pending",
  //     reminder: "no"
  //   };
  //   setList([...list, newtask]);
  // }
  function showonlypending() {
    setPending(true);
    setComplete(false);
    setReminder(false);
  }

  function showonlycompleted() {
    setPending(false);
    setComplete(true);
    setReminder(false);
  }

  function showonlyreminder() {
    setPending(false);
    setComplete(false);
    setReminder(true);
  }


  return (
    <div className="home">
      <div>
        <h1>To-do list</h1>
        <h4 className='zzzzzzzzzz'>Make the most of your time!!</h4>
        <form className="createtask" onSubmit={formik.handleSubmit}>
          <TextField helperText={formik.touched.title && formik.errors.title ? formik.errors.title : null} error={formik.touched.title && formik.errors.title} onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-error-helper-text" label="Enter a title" variant="standard" name='title' value={formik.values.title} />
          {/* {formik.touched.title && formik.errors.title ? formik.errors.title : null} */}
          <TextField helperText={formik.touched.content && formik.errors.content ? formik.errors.content : null} error={formik.touched.content && formik.errors.content} onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-error-helper-text" label="Enter description" variant="standard" name='content' value={formik.values.content} />
          {/* {formik.touched.content && formik.errors.content ? formik.errors.content : null} */}
          <div className="subres">
            <Button type='submit' variant="contained">Create task</Button>
            <Button type='reset' onClick={formik.resetForm} variant="contained">Reset</Button>
          </div>

        </form>
        <div className="alltasks">
          {list.map((obj, index) => <Showalltask obj={obj} key={index} index={index} list={list} setList={setList} />)}
        </div>
      </div>
      <div>
        <div className="btngroup">
          <Button onClick={() => showonlypending()} variant={pending ? "contained":"outlined"}>Pending</Button>
          <Button onClick={() => showonlycompleted()} variant={complete ? "contained":"outlined"}>Completed</Button>
          <Button onClick={() => showonlyreminder()} variant={reminder ? "contained":"outlined"}>Reminders</Button>
        </div>
        <div className="selectedtask">
          {pending === true ? list.filter((ele) => ele.status === "pending").map((obj) => <Showselectedtask obj={obj} />) : null}
          {complete === true ? list.filter((ele) => ele.status === "complete").map((obj) => <Showselectedtask obj={obj} />) : null}
          {reminder === true ? list.filter((ele) => ele.reminder === "yes").map((obj) => <Showselectedtask obj={obj} />) : null}
        </div>
      </div>
    </div>
  );
}
