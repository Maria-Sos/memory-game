import Card from "./Card";

function Board (props) {
  return(
	<div className='board'>
	  {props.field.map(el => <Card card={el} key={el.id} openCard={props.openCard}/>)}
	</div>
  )
}

export default Board
