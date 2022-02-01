


export function CardComponent(props) {


  return (
    <div >
      <h1>{props.product.title}</h1>
      {props.product.description}
      {props.product.images.map((images, index) => { return <img key={index} src={images.image} alt="#" /> })
      }
      <button onClick={() => { props.ApproveRequest(props.product._id) }}> Approve Request</button>
      <button onClick={() => { props.DeclineRequest(props.product._id) }}> Decline Request</button>
    </div>
  )
}