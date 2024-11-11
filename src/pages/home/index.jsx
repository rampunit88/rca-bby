import React, { useEffect, useState } from 'react'

import MegaMenu from '../../common/header/mega-menu/MegaMenu'
import { fetchData } from '../../services'
import LandingPage from '../../components/home'

function HomePage() {
  const [data, setData] = useState([])
  const [item, setItem] = useState(null)
  
  
  useEffect(() => {
    const load = async () => {
      const result = await fetchData();
      console.log({result});
      setData(result);
      if(result){
        const it = result.filter(a => a.id === 1807)[0];
        setItem(it.content.rendered)
      }
    }
    load();
    return () => {
      load();
    }
  }, [])
  
  
    return (
      <>
       {/* <Icons/> */}
       {/* <MegaMenu /> */}
       <LandingPage />
      </>
    )
  }

export default HomePage