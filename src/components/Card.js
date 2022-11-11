export default function Card (props) {

  return(
	<button className='cards'
			onClick={() => props.openCard(props.card.id)}>
	  {props.card.isOpen ? props.card.name : ''}
	</button>
  )
}
