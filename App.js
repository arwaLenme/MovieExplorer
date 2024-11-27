import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/config/navigation/DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (

    <GestureHandlerRootView>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <DrawerNavigator />
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  );
}

export default App;
