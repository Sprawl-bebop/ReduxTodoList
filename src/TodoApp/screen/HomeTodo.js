import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert, Modal, TextInput, Button, FlatList, Keyboard } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, completeTask, setTask } from '../store/TodoSlicer';




const Item = (props) => {
  const dispatch = useDispatch();

  return (

    <View style={styles.divStyle2}>
      <Text style={props.isPresent?styles.textTaskCompleted:styles.textTask}>{props.title}</Text>

      <Button title="Completed" color={"#009688"} 
        onPress={() =>
          dispatch(completeTask(props.title))
        }
      />

      <Button title="Remove" color={"#ff1100"}  
        onPress={() =>
          dispatch(removeTodo(props.title))
        }
      />
    </View>
  );
};


const HomeTodo = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const completedList = useSelector((state)=>state.todo.completedList)

  // console.log('todoList',todoList)

  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: "#e5f1ee" }}>

      <View style={[styles.divStyle]}>
        <View style={{ height: 45, justifyContent: "center", flexDirection: "row" }}>

          <TextInput value={todo} placeholder="Enter task" style={{ flex: 2, borderColor: "grey", borderWidth: 1, marginRight: 10 }}
            onChangeText={(text) => {
              setTodo(text)
            }
            }></TextInput>

          <Button title="Add Task" onPress={() =>{
            if(todo != ''){
              dispatch(addTodo(todo));
              setTodo('');
              Keyboard.dismiss();
            }else{
              Alert.alert("Empty String")
              Keyboard.dismiss();
            }
          }} />
        </View>
      </View>

      <View>
        <FlatList
          data={todoList}
          renderItem={({item}) => <Item
            title={item}
            isPresent={completedList.includes(item)}
          />
          }
        />

      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  textStyl: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  divStyle: {
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 7,
    borderRadius: 10
  },
  divStyle2: {
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 7,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#e6c8ff", 
    gap:10
  },
  divStyle2Completed: {
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 7,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "red"
  },
  textTask: {
    flex: 2,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "blue",
    backgroundColor: "#8bd0dd",
    textTransform: "uppercase",
  },
  textTaskCompleted: {
    flex: 2,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "red",
    backgroundColor: "#8bd0dd",
    textTransform: "uppercase",
    textDecorationLine:"line-through",
    textDecorationStyle: 'solid',
  }

});

export default HomeTodo;
