import React, { useState } from 'react';
import {View,Text} from 'react-native';
import styles from './Todo/styles';
import TodoHeader from './Todo/TodoHeader';
import TodoList from './Todo/TodoList';
export default function App() {
  const [todos,setTodos]=useState([]);
  const handleAddTodo = (todo)=>{
    setTodos([...todos,todo]);
  }
    return (
    <View style={{height:'100%'}}>
      <Text style={styles.title}>TodoList</Text>
      <TodoHeader onAdd={handleAddTodo}/>
      <TodoList todos={todos}/>
    </View>
  );
}
