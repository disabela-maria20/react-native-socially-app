import { View, Text } from 'react-native'
import React from 'react'

const PostItem = (data: IPostItem) => {
  return (
    <View>
      <Text>{data.data.aspectRatio}</Text>
    </View>
  )
}

export default PostItem