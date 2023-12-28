import React, { useState } from 'react';
import { AppRegistry, Text, TouchableOpacity, View } from 'react-native';

import { Button, PaperProvider } from 'react-native-paper';
import { name as appName } from '../app.json';

export default function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  function addScore(score) {
    if (wickets === 10) {
      return;
    }

    switch (score) {
      case 'Dot':
        setBalls(balls + 1);
        break;
      case 'Wide':
        setRuns(runs + 1);
        break;
      case 'No ball':
        setRuns(runs + 1);
        break;
      case '1':
        setRuns(runs + 1);
        setBalls(balls + 1);
        break;
      case '2':
        setRuns(runs + 2);
        setBalls(balls + 1);
        break;
      case '3':
        setRuns(runs + 3);
        setBalls(balls + 1);
        break;
      case '4':
        setRuns(runs + 4);
        setBalls(balls + 1);
        break;
      case '6':
        setRuns(runs + 6);
        setBalls(balls + 1);
        break;
      case 'Wicket':
        setWickets(wickets + 1);
        setBalls(balls + 1);
        break;
      default:
        break;
    }

    if (balls === 5) {
      setBalls(0);
      setOvers(overs + 1);
    }
  }

  return (
    <View className="flex-1 p-4 items-center justify-center gap-y-4 bg-slate-400">
      <View className="flex-row items-baseline">
        <Text className="text-8xl">
          {runs}/{wickets}
        </Text>
        <Text className="text-4xl">{`${overs}.${balls}`}</Text>
      </View>
      <View className="gap-y-2">
        <View className="w-full flex-row gap-x-2">
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.75 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('Dot')}>
            <Text className="text-2xl">Dot</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.75 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('Wide')}>
            <Text className="text-2xl">Wide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.75 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('No ball')}>
            <Text className="text-2xl">No ball</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex-row gap-x-2">
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.75 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('1')}>
            <Text className="text-2xl">1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.75 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('2')}>
            <Text className="text-2xl">2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.75 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('3')}>
            <Text className="text-2xl">3</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full flex-row gap-x-2">
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.5 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('4')}>
            <Text className="text-2xl">4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.5 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('6')}>
            <Text className="text-2xl">6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: '25%', aspectRatio: 1 / 0.5 }}
            className="grow items-center justify-center border-solid border-2 slate-sky-700 rounded-lg"
            onPress={() => addScore('Wicket')}>
            <Text className="text-2xl">Wicket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

AppRegistry.registerComponent(appName, () => App);
