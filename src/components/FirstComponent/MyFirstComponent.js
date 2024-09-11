import "../FirstComponent/firstComponent.css"

function MyFirstComponent(props){
    console.log(props);
    return(
        <div className ="content">
            <div className = "header">
                <p>{props.cardData[0].name}</p>
                <p>{props.cardData[0].position}</p>
            </div>
            <div className = "shortDescription">
            <p>{props.cardData[0].shortDescription}</p>
            </div>
            <div className = "links-area">
                <a href={props.cardData[0].mediaLinks.github} 
                target = "_blank" rel="noreferrer"> Github </a>
                <a href= {props.cardData[0].mediaLinks.linkedIn}
                target="_blank" rel="noreferrer" >LinkedIn</a>
            </div>
        </div>
    )
};

export default MyFirstComponent;