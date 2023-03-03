import React from 'react'
import Card from './Card'
const PageLayout = ({children}) => {
  return (
    <main className="flex  ">
        <aside className=""></aside>
        {children}
        
    </main>
  )
}

export default PageLayout