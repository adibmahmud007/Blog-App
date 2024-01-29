
const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();
const day=date.getDay();


//Here i have used props 
function Card(props){

  //This is for destructuring.
  const{todoTitle,describtion}=props;

  return <div className="card">
  <h3 className="cardTitle">{todoTitle}</h3>
  <p className="cardDescribtion">{describtion}</p>
  <p className="date">{day + "/" + month + "/" + year}</p>
</div>
}
export default Card