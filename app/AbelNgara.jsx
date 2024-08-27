import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

export default function ProductDetail() {
  const clickEventListener = () => {
    Alert.alert('Success', 'Plant has been added to cart');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.Plantimage}
            source={require('../assets/images/Plant Image.jpg')}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.name}>Plant Name</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur.
            Lacus vitae viverra id habitant proin elementum urna pellentesque.
            Eu auctor elementum in aliquet pellentesque ipsum egestas purus nisl.
            Sed nec semper ultricies sed amet tempor et nulla.
            Posuere sit nisi sit diam et lectus.
          </Text>
          <Text style={styles.variation}>Variations</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.images}>
          <Image
            style={styles.image}
            source={require('../assets/images/Plant image 1.jpg')}
          />
          <Image
            style={styles.image}
            source={require('../assets/images/Plant image 2.jpg')}
          />
          <Image
            style={styles.image}
            source={require('../assets/images/Plant image 3.jpg')}
          />
          <Image
            style={styles.image}
            source={require('../assets/images/Plant image 4.jpg')}
          />
        </ScrollView>

        <View style={styles.separator}></View>

        <View style={styles.buyButtonbox}>
          <TouchableOpacity style={styles.buyButton} onPress={clickEventListener}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center', // Center the product image horizontally
    marginHorizontal: 30,
    marginTop: 20,
  },
  Plantimage: {
    borderRadius: 200,
    width: 200,
    height: 200,
  },
  contentContainer: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20, // Added margin bottom to create space before the images
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  variation: {
    marginTop: 30,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    textAlign: 'left',
    marginTop: 10,
    color: '#696969',
  },
  image: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    marginHorizontal: 10, // Space between images
  },
  images: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  buyButton: {
    marginTop: 30, // Added margin top to create space from the images
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#223A28',
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  buyButtonbox: {
    marginHorizontal: 140, // Adjusted margin horizontal to align with other elements
    marginTop: 30, // Added margin top to create space from the separator
  },
});
