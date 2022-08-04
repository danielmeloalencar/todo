import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Compar o pão na padaria', done: false },
    { id: 2, name: 'Compar um bolo na padaria', done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}


      </C.Area>
    </C.Container>
  );
}

export default App;
