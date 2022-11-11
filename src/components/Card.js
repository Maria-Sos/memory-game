export default function Card (props) {
  const style = {
	border: 'solid 1px black',
	fontSize: '35px',
	fontWeight: '400',
	cursor: 'pointer',
	padding: '50px',
	backgroundColor: '#BCEAD5'
  }
  return(
	<button style={style}
			onClick={() => props.openCard(props.card.id)}>
	  {props.card.isOpen ? props.card.name : 'X'}
	</button>
  )
}
