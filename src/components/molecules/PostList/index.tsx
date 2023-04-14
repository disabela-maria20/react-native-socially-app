import { FlatList } from 'react-native'
import React from 'react'
import PostItem from '../../atoms/PostItem'
import post from '../../../../utils/api/Json/feed.json'

const PostList = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: IPostList) => item.idPost}
      data={post}
      renderItem={({ item }) => <PostItem data={item} />}
    />
  )
}

export default PostList