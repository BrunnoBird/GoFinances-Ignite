import AsyncStorage from "@react-native-async-storage/async-storage";

export function clearStorage(){
  const dataKey = '@gofinance:transactions';
  AsyncStorage.removeItem(dataKey);
}