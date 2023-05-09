import React from 'react'
import Section1 from './Section1'

import Title from '../Title'
import CardGrid from '../CardGrid'
import Credential from '../Credential'



// import Section3 from './Section3'






export const Main = () => {
  return (
    <div>
        <Section1/>
        <Title text="Skills" />
        <CardGrid/>
        <Title text="Credentials" />
        <Credential />
        
        
        {/* <Section3/> */}
        

        
        
        
    </div>
  )
}
