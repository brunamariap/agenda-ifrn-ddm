import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrarTarefa } from './pages/RegistrarTarefa';
import { ListarTarefa } from './pages/ListarTarefa';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="registrarTarefa" component={RegistrarTarefa} options={{ title: 'Registrar Tarefa', headerTitleAlign: 'center'}} />
      <Stack.Screen name="listarTarefa" component={ListarTarefa} options={{ title: 'Listar Tarefas', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}