

const date = new Date();
const headingStyleObj = { color: "white" };
const backgroundStyleObj = { backgroundColor: "red" };





function Card(props) {
  console.log(props);
  return <div class="card shadow mb-2">
    <div class="card-header" style={backgroundStyleObj}>
      <h1 style={headingStyleObj}>
        {props.title}-{props.key}
      </h1>
    </div>

    <div class="card-body">
      <p>{props.description}</p>
      <span>Date : {date.getDate()}-{date.getMonth()}-{date.getFullYear()}</span>
    </div>
  </div>

}


export default Card;