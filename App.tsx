import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Profile';

import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  return (
    <>
      {
        fontsLoaded ? <Home /> : <ActivityIndicator />
      }
      <StatusBar style="auto" />
    </>
  );
}

