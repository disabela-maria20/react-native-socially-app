import React from 'react'
import Menu from '../../molecules/Menu'
import * as S from './styles'
import Stories from '../../atoms/Stories'

const HeaderFeead = () => {
  return (
    <>
      <S.Bg source={require('../../../assets/image/bg.png')} />
      <Menu />
      <S.TitleBig>Feed</S.TitleBig>
      <Stories />
    </>

  )
}

export default HeaderFeead