import * as C from './styles';
import { Item } from '../../types/Item'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
    onRemove: (id: number) => void
}

export const ListItem = ({ item, onChange, onRemove }: Props) => {

    return (
        <C.Container done={item.done} title="Arraste e solte para ordenar ou clique para marcar como concluído">
            <input type="checkbox"
                id={item.id.toString()}
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label htmlFor={item.id.toString()}>{item.name}</label>
            <div className='remove' title="Remover" onClick={()=>onRemove(item.id)}>🗑️</div>
        </C.Container>
    )
}