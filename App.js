import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert, Animated, TouchableOpacity,ScrollView } from 'react-native';

const App = () => {
  const [animations, setAnimations] = useState([]);

  const handlePress = () => {
    // Tworzenie nowej animacji w stanie
    const newAnimation = new Animated.Value(0);

    // Uruchomienie animacji
    Animated.timing(newAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Dodanie nowej animacji do listy animacji
    setAnimations([...animations, newAnimation]);
  };

  return (
    <View style={styles.container}>
      {/* Przycisk uruchamiający animację */}
      <View>
        <Text>
          Elo
          Elo
        </Text>
      </View>
      <View>
        <Text>
          Elo
          Elo
        </Text>
      </View>
      <View>
        <Text>
          Elo
          Elo
        </Text>
      </View>
      
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <View style={styles.buttonLabel}>
          <Text style={styles.buttonText}>Uruchom animację</Text>
        </View>
      </TouchableOpacity>

      {/* Wyświetlanie listy animacji */}
      <ScrollView contentContainerStyle={styles.animationList}>
        {animations.map((animation, index) => (
          <Animated.View
            key={index}
            style={[
              styles.animationBox,
              { opacity: animation, transform: [{ translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0]
              }) }] }
            ]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
  },
  buttonLabel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  animationList: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationBox: {
    width: 100,
    height: 100,
    backgroundColor: '#FF2D55',
    marginVertical: 10,
  },
});

export default App;