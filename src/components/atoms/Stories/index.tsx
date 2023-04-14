import * as S from './styles'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import story from '../../../../utils/api/Json/authors.json'

const Stories = () => {


  return (
    <S.StoriesContiner>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {story.map((data: IStoriesProps) => (
          <LinearGradient key={data.id} colors={['#25A0B0', '#099672']} style={bg.bgGradient}>
            <S.BgProfile source={{ uri: data.avatar }} width={50} height={50} />
          </LinearGradient>
        ))}
      </ScrollView>
    </S.StoriesContiner>
  )
}

export default Stories

const bg = StyleSheet.create({
  bgGradient: {
    height: 70,
    width: 70,
    borderRadius: 45,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30
  }
});