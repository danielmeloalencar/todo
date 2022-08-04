import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

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
