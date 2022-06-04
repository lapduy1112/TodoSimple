import { useState } from 'react'
import {FaTrash} from 'react-icons/fa'


  function App(){
    const [job,setJob]=useState('')
    const [jobs,setJobs]= useState(()=>{
      const storageJobs=JSON.parse(localStorage.getItem('jobs'))
      return storageJobs??[]
    })
    const handleSubmit = () => {

      setJobs((prev) => {
 
            const newJobs = [...prev, job];
  
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs);
      
            return newJobs;
          
      });
      setJob("");
    };
    const handleDelete=(index)=>{
      setJobs((prev)=>{
        const newJobs=[...prev]
        newJobs.splice(index, 1);
        localStorage.removeItem('jobs');
        return newJobs
      })
    }

      return (
        <div className="container">
          <form>
          <input value={job}
                  onChange={e=>setJob(e.target.value)}
                  placeholder="job"
            />
            <button onClick={handleSubmit} id="add">Add</button>
            
          </form>
            <ul className="todos">
                {
                  jobs.map((job,index) =>(
                    
                      <li key={index}>
                      <span>{job}</span>
                      <div>
                      <button id="edit">Edit</button>
                      <button onClick={handleDelete} id="delete"><FaTrash/></button>
                      </div>
                      </li>
                      
                    
                    
                  ))
                }
            </ul>
        </div>
      )
    }
 



export default App;
