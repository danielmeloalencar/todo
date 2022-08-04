import { useState, useRef } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea';

const App = () => {

  const dragItem = useRef<any>();
  const dragOverItem = useRef<any>();

  const [list, setList] = useState<Item[]>([
    { id: 0, name: 'Marcar como concluído', done: true },
    { id: 1, name: 'Remover tarefa', done: true },
    { id: 2, name: 'Ordenar com drag and drop', done: true },
    { id: 3, name: 'Persistir os dados com AsyncStorage', done: false },
    { id: 4, name: 'Exibir mensagem de confirmação ao delelar', done: false },
    { id: 5, name: 'Melhorar UI', done: false }
  ]);


  const dragStart = (position: number): void => {
    dragItem.current = position;
  };


  const dragEnter = (position: number): void => {
    dragOverItem.current = position;
  };

  const drop = (e: React.DragEvent) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  const handleAddTask = (taskName: string): void => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList);
  }

  const handleOnChange = (id: number, done: boolean): void => {
    let newList = list.map((item, index) => {
      if (item.id === id) {
        item.done = done;
      }
      return item;
    })

    setList(newList);
  }

  const handleOnRemove = (id: number): void => {
    let newList = list.filter((item) => item.id !== id)
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <div
            key={index}
            draggable
            ref={dragItem}
            onDragStart={e => dragStart(index)}
            onDragEnter={e => dragEnter(index)}
            onDragEnd={drop}
            style={{ cursor: 'grab' }}
          >
            <ListItem
              item={item}
              onChange={handleOnChange}
              onRemove={handleOnRemove}
            />
          </div>
        ))}


      </C.Area>
    </C.Container>
  );
}

export default App;
