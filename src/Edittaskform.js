import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from "yup";





export function Edittaskform({ obj, list, setList }) {

  const editschema = yup.object({
    title: yup.string().required().min(1),
    content: yup.string().required().min(5)
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { title: obj.title, content: obj.content },
    validationSchema: editschema,
    onSubmit: function (value) {
      let updarr = list.map((ele) => ele.title === obj.title ? { ...ele, title: value.title, content: value.content } : ele);
      setList([...updarr]);
      navigate("/");
    }
  });

  // const[utitle,setUtitle] = useState(obj.title)
  // const[ucontent,setUcontent] = useState(obj.content)

  // function update(){
  //   let updarr = list.map((ele) => ele.title === obj.title ? {...ele, title: utitle, content: ucontent } : ele);
  //   setList([...updarr]);
  //   navigate("/");
  // }
  
  return (
    <form className="edittask" onSubmit={formik.handleSubmit}>
      <TextField helperText={formik.touched.title && formik.errors.title ? formik.errors.title : null} error={formik.touched.title && formik.errors.title} onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-error-helper-text" label="Enter a title" variant="standard" value={formik.values.title} name="title" />
      {/* {formik.touched.title && formik.errors.title ? formik.errors.title : null} */}
      <TextField helperText={formik.touched.content && formik.errors.content ? formik.errors.content : null} error={formik.touched.content && formik.errors.content} onBlur={formik.handleBlur} onChange={formik.handleChange} id="standard-error-helper-text" label="Enter description" variant="standard" value={formik.values.content} name="content" />
      {/* {formik.touched.content && formik.errors.content ? formik.errors.content : null} */}
      <Button type='submit' variant="contained">Update task</Button>
    </form>
  );
}
