
import React from 'react'
import * as S from './styles'
import { View } from 'react-native'

const Title = ({ text }: ITitleProps) => {
  return <View>
    <S.Title>{text}</S.Title>
  </View>


}

export default Title