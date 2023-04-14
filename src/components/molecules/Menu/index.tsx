import * as S from './styles'
import React from 'react'
import Title from '../../atoms/Title'
import Icon from 'react-native-vector-icons/Octicons'
import { View } from 'react-native'

const Menu = () => {
  return (
    <S.Container>
      <Title text="Socially" />
      <View>
        <Icon
          name="bell-fill"
          color={'#0f0f0f'}
          size={21} />
      </View>

    </S.Container>
  )
}

export default Menu