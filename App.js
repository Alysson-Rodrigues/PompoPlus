import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex items-center justify-center w-full h-full bg-black">
      <View className="h-[100px] w-[100px] bg-red-400 rounded-full">
      </View>
      <View className="bg-red-400 rounded-[20px] mt-4">
        <Text className="bg-white p-4">
          Im PompoPlus, your next generation Pompoarism trainer.
        </Text>
      </View>
    </View>
  );
}
