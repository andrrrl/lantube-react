import { Play as PlayIcon } from 'react-feather';
import Button from '../../../ui/Button';

function Play(props: any) {
    return (
        <Button onClick={props.onPlay} size="sm" type="light">
            <PlayIcon />
        </Button>
    );
}

export default Play;