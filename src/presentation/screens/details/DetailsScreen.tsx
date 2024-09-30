import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ( { route }: Props) => {
  
  // const { movieId } = useRoute().params;
  const { movieId } = route.params;
  const { movie, isLoading, loadMovie } = useMovie(movieId);
  
  if(isLoading){
    return <Text>Loading</Text>
  }

  return (
    <View>
      {/* Header */}
      <MovieHeader movie={ movie! } />
      {/* Deatails */}
    </View>
  )
}
