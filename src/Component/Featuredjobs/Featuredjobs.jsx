import { useEffect, useState } from "react";
import Job from "./Job/Job";



const Featuredjobs = () => {

    const[jobs,setJobs]= useState([])
    const[datalength,setjobslength]=useState(4)

    const handlejoblength = ()=>{
        setjobslength(jobs.length)
    }

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
            <div className="grid grid-cols-2 px-10 ml-20 gap-4 mt-4">
                {
                    jobs.slice(0,datalength).map(job=> <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={datalength===jobs.length ?'hidden':'text-center'} >
                <button  onClick={handlejoblength }>See All Jobs</button>
            </div>
            
        </div>
    );
};

export default Featuredjobs;