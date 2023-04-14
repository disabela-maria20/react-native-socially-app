import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { NavigatorTab } from './routers'

const Routers = () => {
  return (
    <NavigationContainer>
      <NavigatorTab />
    </NavigationContainer>
  )
}

export default Routers