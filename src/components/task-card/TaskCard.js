import '../task-card/TaskCard.css'

function TaskCard(props){
    
return (
        <div className="card-wrapper">  
           <div className = "card-header">
               <p className = "task-id">{props.id}</p>
               <div className = "badge">
                <p>{props.Status}</p>
               </div>
           </div>
           <div className = "card-content">
             <p>{props.Name} </p>
           </div>
           <div className = "card-footer">
             <div>
              <p className = "footer-date">Due Date</p>
              <p>{props.dueDate.toLocaleDateString()}</p>
              </div>
           </div>
        </div>
)
}

export default TaskCard;