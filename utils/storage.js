// Make sure AsyncStorage is imported in storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Verify save functions are being called
await saveUser(userData);
await saveWatchlist(updatedList);
