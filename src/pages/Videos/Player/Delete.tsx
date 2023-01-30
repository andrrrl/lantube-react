import { Trash as TrashIcon } from 'react-feather';
import Button from '../../../ui/Button';

function Delete(props: any) {
    return (
        <Button onClick={props.onDelete} size="sm" type="danger">
            <TrashIcon />
        </Button>
    );
}

export default Delete;