import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';  
import { tailwind, color } from 'react-native-tailwindcss';a

export default function App() {
   return (
    <View style={[tailwind.flex1, tailwind.alignCenter, tailwind.justifyCenter, tailwind.bgWhite, tailwind.itemsCenter]}>
      <Text style = {[tailwind.textRed900]}>Open </Text>
      <StatusBar style="auto" />
    </View>
  );
}

 

 
