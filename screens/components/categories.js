import {View, Text, ScrollView} from 'react-native'
import React from 'react'

import CategoryCard from './CategoryCard'

const Categories = () => {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10,}}>
            <Text>
                <CategoryCard imgUrl='https://links.papareact.com/gn7' title='teste 1'/>
                <CategoryCard imgUrl='https://links.papareact.com/gn7' title='teste 2'/>
                <CategoryCard imgUrl='https://links.papareact.com/gn7' title='teste 3'/>
            </Text>
        </ScrollView >
    )
}

export default Categories