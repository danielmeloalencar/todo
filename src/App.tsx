import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id:0, name: 'Marcar como concluído', done:true},
    {id:1, name: 'Remover tarefa', done:true},
    {id:2, name: 'Persistir os dados com AsyncStorage', done:false},
    {id:3, name: 'Exibir mensagem de confirmação ao delelar', done:false},
    {id:4, name: 'Ordenar com drag and drop', done:false},
    {id:5, name: 'Melhorar UI', done:false}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList);
  }

  const handleOnChange = (id: number, done: boolean) => {
    let newList = list.map((item, index) => {
      if (item.id === id) {
        item.done = done;
      }
      return item;
    })

    setList(newList);
  }

  const handleOnRemove = (id: number) => {
    let newList = list.filter((item)=>item.id !== id)
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem 
            key={index} 
            item={item} 
            onChange={handleOnChange}
            onRemove={handleOnRemove}
            />
        ))}


      </C.Area>
    </C.Container>
  );
}

export default App;
