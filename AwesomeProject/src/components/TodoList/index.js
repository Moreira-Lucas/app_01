import React, {useState} from 'react';
import { View, Text, TextInput, Checkbox } from 'react-native';

export const TodoList = () =>{
    const [tasks, setTask] = useState([]);

        const addTask = (task)=>{
            setTask([...tasks,{ task, completed: false }])
        };

        const removeTask = () =>{

            setTask(tasks.filter((t)=> t!= task));
        };

        return(
            <View >
                
   <Text>My first app</Text>
             
            
   

            </View>

        );

        

}

//export default TodoList;