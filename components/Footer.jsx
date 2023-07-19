'use client'

import React from 'react'
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'




const Footer = ({QItems}) => {

  const router = useRouter()
  const clearCompleted = async ()=>{
    await fetch('http://localhost:3000/api/tasks',{
      method:'DELETE'
    })
    await router.refresh()
    await router.push('/')
  }
  
  return (
    <footer className={styles.footerHomeworks}>
            <div className={styles.items}><p>{QItems} Items</p></div>
            <div className={styles.filters}>
                {/* <Link href='/'>All</Link> */}
                {/* <Link href='/active' >Active</Link> */}
                {/* <Link href='/completed'>Completed</Link> */}
                <button onClick={()=>{
                router.refresh()
                router.push('/')  
                }}>All</button>
                <button onClick={()=>{
                router.refresh()
                router.push('/active')  
                }}>Active</button>
                <button onClick={()=>{
                router.refresh()
                router.push('/completed')  
                }}>Completed</button>
            </div>
            <div className={styles.clear}>
              {/* <Link onClick={()=> clearCompleted()} href='/'>Clear Completed</Link> */}
                <button onClick={()=> clearCompleted()}>Clear completed</button>
            </div>
        </footer>
  )
}

export default Footer