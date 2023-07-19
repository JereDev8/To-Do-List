'use client'

import styles from './create.module.css'
import Link from 'next/link'

import { useRouter } from 'next/navigation'



const Create = () => {

  const router = useRouter()
  const createTask = async (e)=>{
    e.preventDefault()
    await fetch('http://localhost:3000/api/tasks',{
      method:'POST',
      body: JSON.stringify({description:document.getElementById('newTask').value}),
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
          <h1 className={styles.title}>CREATE TO DO</h1>
          {/* <Link className={styles.linkCreate} href='/'>See Tasks</Link> */}
          <button className={styles.linkCreate} onClick={()=>{
            router.refresh()
            router.push('/')
            } }>See Tasks</button>
          </div>

          <form>
            <input id='newTask' type='text' className={styles.inpCreate}/>
            <button onClick={(e)=>createTask(e)} className={styles.buttonCreate} >Create Task</button>
          </form>
        </div>
    </div>
  )
}


export default Create