
export function Showselectedtask({ obj }) {

  const style1 = {
    textDecoration: obj.status === "pending" ? "none" : "line-through"
  };

  return (
    <div className="taskcont">
      <h4 style={style1}>{obj.title}</h4>
      <p style={style1}>{obj.content}</p>
    </div>
  );
}
