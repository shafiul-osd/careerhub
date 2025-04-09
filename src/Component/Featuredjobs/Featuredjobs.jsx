import { useEffect, useState } from "react";
import Job from "./Job/Job";



const Featuredjobs = () => {

    const[jobs,setJobs]= useState([])

    useEffect(()=>{
        fetch("/jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div>
           <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <p className="text-sm text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <p>all jobs {jobs.length}</p>
            </div> 
            <div className="grid grid-cols-2">
                {
                    jobs.map(job=> <Job job={job} key={job.id}></Job>)
                }
            </div>
            
        </div>
    );
};

export default Featuredjobs;