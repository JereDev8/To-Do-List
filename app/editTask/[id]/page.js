'use client'

import styles from '../../create/create.module.css'
import Link from 'next/link'

import { useRouter } from 'next/navigation'



const EditTask = ({params}) => {
  const {id} = params
  const router = useRouter()
  const EditTask = async (e)=>{
    e.preventDefault()
    await fetch(`http://localhost:3000/api/tasks/editTask/${id}`,{
      method:'PUT',
      body: JSON.stringify({newDescription:document.getElementById('newTask').value}),
      headers:{
        'Content-type':'application/json'
      }
    })
    document.getElementById('newTask').value= ""

  }
  return (
    <div className={styles.container}>
        <div className={styles.pict}></div>
        <div className={styles.todo}>
          <div className={styles.contCreateToDo}>
          <h1 className={styles.title}>EDIT TASK</h1>
          {/* <Link className={styles.linkCreate} href='/'>See Tasks</Link> */}
          <button className={styles.linkCreate} onClick={()=>{
            router.refresh()
            router.push('/')
            } }>See Tasks</button>
          </div>

          <form>
            <input id='newTask' type='text' placeholder='Edit task...' className={styles.inpCreate}/>
            <button onClick={(e)=>EditTask(e)} className={styles.buttonCreate} >Edit Task</button>
          </form>
        </div>
    </div>
  )
}


export default EditTask