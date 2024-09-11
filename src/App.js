import TaskCard from "./components/task-card/TaskCard"
import MyFirstComponent from './components/FirstComponent/MyFirstComponent';
import './App.css';

function App() {
  const data  = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace ",
      Status: "Todo",
      dueDate: new Date(2024, 9 , 11),
    },{
      id: "T-2",
      name: "1.2 Create a Design System for Enum Workspace ",
      Status: "In Progress",
      dueDate: new Date(2024, 9 , 15),
    },
    {
      id: "T-3",
      name: "1.3 Create a Design System for Enum Workspace ",
      Status: "Completed",
      dueDate: new Date(2024, 9 , 20),
    }
  ]

  const data1 = [
     {
      name:"Andrei Sbirciog",
      position:"Frontend Devleoper",
      shortDescription:"Frontend Developer based in London which is pasionate about developing applications, websites, electronic direct email and professional animated banners. I am highly proficient in HTML,CSS and Javascript programming languages. Confident working with React, NodesJs, Wordpress, Bootstrap.",
      mediaLinks: {
        github: "https://github.com/xandrei08",
        linkedIn:"https://www.linkedin.com/in/andrei-sbirciog-128a7018a/"
      }

     },
     
  ]
  
  return (
  <div className="app-container"> 
  <MyFirstComponent cardData = {data1}
  />
   <TaskCard 
   id = {data[0].id}
   Status = {data[0].Status}
   Name = {data[0].name}
   dueDate = {data[0].dueDate}
  />
 <TaskCard 
   id = {data[1].id}
   Status = {data[1].Status}
   Name = {data[1].name}
   dueDate = {data[1].dueDate}
  />
   <TaskCard 
   id = {data[2].id}
   Status = {data[2].Status}
   Name = {data[2].name}
   dueDate = {data[2].dueDate}
  /> 
  </div>
  )
}

export default App;
