


export function CardComponent(props){
  

  return(
     <div>
    <h1>{props.product.title}</h1>
    {props.product.description}
    { props.product.images.map((image)=>{ return <img src= {image} alt="#"/> }   ) 
    }
    <button onClick=  { ()=>{props.ApproveRequest(props.product._id)}}> Approve Request</button>
    <button onClick=  { ()=>{props.DeclineRequest(props.product._id)}}> Decline Request</button>
    </div>
  )
}