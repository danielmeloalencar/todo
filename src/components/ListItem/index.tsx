import * as C from './styles';
import { Item } from '../../types/Item'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
    onRemove: (id: number) => void
}

export const ListItem = ({ item, onChange, onRemove }: Props) => {

    return (
        <C.Container done={item.done}>
            <input type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <div className='remove' title="Remover" onClick={()=>onRemove(item.id)}>🗑️</div>
        </C.Container>
    )
}