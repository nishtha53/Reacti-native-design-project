import { StyleSheet, Text, View , Linking,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCards() {

    function openWebsite(websitelink: string)
    {
        Linking.openURL(websitelink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card,styles.elevatedcard]}>
      <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                JavaScript Arrow functions
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1676195862950/0673c541-7348-4e24-9523-9dbe5829540c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer} >
            <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer} >
            <TouchableOpacity
            onPress={() => openWebsite('https://nishtha0503.hashnode.dev/why-do-we-need-arrow-functions')}
            >
                <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://twitter.com/thakkar_nishtha')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width: 320,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedcard:{
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }
})