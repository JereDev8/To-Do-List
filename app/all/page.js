
import Link from 'next/link'
import styles from '../page.module.css'
import Homework from '@/components/Homework'
import Footer from '@/components/Footer'

const getTasks = async ()=>{
    const tasks= await fetch('http://localhost:3000/api/tasks',{
      cache:'no-store'
    })
    return tasks
}


export default async function Home() {

  const data= await getTasks()
  const tasks= await data.json()
  return (
    <div className={styles.container}>
        <div className={styles.pict}></div>
        <div className={styles.todo}>
          <div className={styles.contCreateToDo}>
          <h1 className={styles.title}>TO DO</h1>
          <Link className={styles.linkCreate} href='/create'>Create Task</Link>
          </div>
          {
            tasks.map((task)=>{
              return <Homework check={task.completed} ident={task._id} key={task._id} homework={task.description}/>
            })
          }
          <Footer QItems={tasks.length}/>
        </div>
    </div>
  )
}
