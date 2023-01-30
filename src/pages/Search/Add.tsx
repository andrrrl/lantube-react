import { Plus as PlusIcon } from 'react-feather';
import Button from '../../ui/Button';

function Add(props: any) {
  return (
    <Button onClick={props.onAdd} size="sm" type="success">
      <PlusIcon />
    </Button>
  )
}

export default Add;