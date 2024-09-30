import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  if (isLoading) {
    return(<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principla */}
        <PosterCarousel movies= { nowPlaying } />
        {/* Populares */}
        <HorizontalCarousel 
          movies={ popular }
          title='Populares'
          loadNextPage={ () => console.log('fin alcanado')}
        />
        {/* Top Rated */}
        <HorizontalCarousel movies={ topRated } title='Mejor Calificadas'/>
        {/* Proximamente */}
        <HorizontalCarousel movies={ upcoming } title='Proximamente'/>
      </View>
    </ScrollView>
  )
}
