import "./CarCard.css";

function CarCard({car}){

return(

<div className="card">

<img src={car.image} alt={car.name}/>

<div className="content">

<h2>{car.name}</h2>

<p><strong>Type:</strong> {car.type}</p>

<h3>{car.price}</h3>

<h4>Features</h4>

<ul>

{

car.features.map((feature,index)=>(

<li key={index}>{feature}</li>

))

}

</ul>

<button>Know More</button>

</div>

</div>

)

}

export default CarCard;