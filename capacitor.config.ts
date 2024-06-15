import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Search City',
  webDir: 'dist',
  server:  {
    androidScheme:     'https',
    iosScheme:         'https',
    cleartext:         true,
    allowMixedContent: true, 
  }
};

export default config;
