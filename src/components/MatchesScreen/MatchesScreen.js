import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SectionList, FlatList, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy data for latest matches and latest texts
const latestMatches = [
    { id: '1', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741019_1280.jpg' },
    { id: '2', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2016/11/22/21/26/asian-girl-1850617_1280.jpg' },
    { id: '3', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741019_1280.jpg' },
    { id: '4', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2016/11/22/21/26/asian-girl-1850617_1280.jpg' },
    { id: '5', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741019_1280.jpg' },
    { id: '6', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2016/11/22/21/26/asian-girl-1850617_1280.jpg' },
    { id: '7', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741019_1280.jpg' },
    { id: '8', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2016/11/22/21/26/asian-girl-1850617_1280.jpg' },

  // Add more matches as needed
];

const latestTexts = [
  { id: '1', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/10/27/10/28/girl-8344955_1280.jpg', message: 'Hey, how are you?' },
  { id: '2', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_1280.jpg', message: 'Want to catch up?' },
  { id: '3', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/10/27/10/28/girl-8344955_1280.jpg', message: 'Hey, how are you?' },
  { id: '4', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_1280.jpg', message: 'Want to catch up?' },
  { id: '5', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/10/27/10/28/girl-8344955_1280.jpg', message: 'Hey, how are you?' },
  { id: '6', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_1280.jpg', message: 'Want to catch up?' },
  { id: '7', name: 'Alice', image: 'https://cdn.pixabay.com/photo/2023/10/27/10/28/girl-8344955_1280.jpg', message: 'Hey, how are you?' },
  { id: '8', name: 'Bob', image: 'https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_1280.jpg', message: 'Want to catch up?' },
  // Add more texts as needed
];

const DATA = [
    {
      title: 'Latest Matches',
      horizontal: true,
      data: latestMatches,
    },
    {
      title: 'Latest Texts',
      horizontal: false,
      data: latestTexts,
    },
  ];
  
  const MatchesScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const renderMatchItem = ({ item }) => (
    <TouchableOpacity style={styles.matchItem} onPress={() => navigation.navigate('Chat', { name: item.name })}>
      <Image source={{ uri: item.image }} style={styles.matchImage} />
      <Text style={styles.matchName}>{item.name}</Text>
    </TouchableOpacity>
  );
  
    const renderTextItem = ({ item }) => (
      <TouchableOpacity
        style={styles.textItem}
        onPress={() => navigation.navigate('Chat', { name: item.name })}
      >
        <Image source={{ uri: item.image }} style={styles.textImage} />
        <View style={styles.textContent}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textMessage}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  
    const renderSectionHeader = ({ section: { title } }) => (
      <Text style={styles.sectionTitle}>{title}</Text>
    );
  
    const renderSectionFooter = ({ section }) => {
      if (section.title === 'Latest Matches') {
        return (
          <FlatList
            data={section.data}
            renderItem={renderMatchItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        );
      }
      return null;
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <SectionList
          sections={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item, section }) =>
            section.title === 'Latest Texts' ? renderTextItem({ item }) : null
          }
          renderSectionHeader={renderSectionHeader}
          renderSectionFooter={renderSectionFooter}
          stickySectionHeadersEnabled={false}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 8,
      marginLeft: 16,
    },
    section: {
      marginBottom: 24,
    },
    horizontalList: {
      paddingLeft: 16,
    },
    matchItem: {
      alignItems: 'center',
      marginHorizontal: 8,
    },
    matchImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 4,
    },
    matchName: {
      fontSize: 14,
    },
    textItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginHorizontal: 16,
    },
    textImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 8,
    },
    textContent: {
      flex: 1,
    },
    textName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    textMessage: {
      fontSize: 14,
      color: '#666',
    },
  });
  
  export default MatchesScreen;