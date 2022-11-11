import Card from "./Card";

function Board (props) {
  const style = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 2fr)',
	gridTemplateRows: 'repeat(3, 2fr)',
	border: 'solid 3px black',
	width: '600px',
	height: '500px',
	margin: '20px auto'
  }
console.log(props.field)
  return(
	<div style={style}>
	  {props.field.map(el => <Card card={el} key={el.id} openCard={props.openCard}/>)}
	</div>
  )
}

export default Board
