import { useAppContext } from '@/context/AppContext';
import React from 'react'

const AppTitle = () => {
      const { router } = useAppContext();
    
  return (
    <h2 onClick={() => router.push("/")} className="logo">
      AK <span>shop</span>
    </h2>
  )
}

export default AppTitle
