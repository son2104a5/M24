type Job = {
  job_name: string
  id: number
  status: boolean
}

interface Props {
  jobs: Job[]
  openFormDelete: (id: number, name: string) => any
  setStatus: (id: number) => any
  openFormEdit: (id: number, name: string) => any;
}

export default function completeList({ jobs, openFormDelete, setStatus, openFormEdit}: Props) {
  return (
  <div className="overflow-auto max-h-[300px]">
      {
          jobs.map((job) => {
            if (job.status){
              return  <div className="flex justify-between w-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-[20px] p-2">
                          <div className="flex gap-2">
                              {job.status ? <input type="checkbox" checked onClick={()=>setStatus(job.id)}/> : <input type="checkbox" onClick={()=>setStatus(job.id)}/>}
                              {job.status ? <s>{job.job_name}</s>:<p>{job.job_name}</p>}
                          </div>
                          <div className="flex gap-2">
                              <i className="fa-solid fa-pen-to-square text-yellow-400 cursor-pointer" onClick={() => openFormEdit(job.id, job.job_name)} ></i>
                              <i className="fa-solid fa-trash text-red-500 cursor-pointer" onClick={()=>openFormDelete(job.id, job.job_name)}></i>
                          </div>
                      </div>
            }  
          })
      }
  </div>
  )
}
