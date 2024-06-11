type Job = {
  id: string
  name: string
  status: boolean
}

type FunctionType = {
  job: Job
  handleChangeStatus: (id: string) => any
}

export default function JobItem({job, handleChangeStatus}: FunctionType) {
  const handleChecked = (id:string) => {
    // Truyền id lên component cha
    handleChangeStatus(id)
  }
  return (
    <>
      <li key={job.id}>
        <input type="checkbox" id="task1" checked={job.status} onChange={()=>handleChecked}/>
        <label htmlFor="task1">
          {
            job.status ? <s>{job.name}</s> : <span>{job.name}</span>
          }
        </label>
        <button>Delete</button>
      </li>
    </>
  )
}
