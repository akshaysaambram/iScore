import { Stack, useRouter } from 'expo-router';

export default function AppLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: 'rgb(51, 65, 85)' },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'iScore',
        }}
      />
    </Stack>
  );
}
