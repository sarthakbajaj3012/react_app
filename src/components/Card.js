import './Card.css'


function Card(props) {
  const classes = 'Cards ' + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;