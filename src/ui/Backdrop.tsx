import './Backdrop.css';

function Backdrop(props: any) {

    function closeHandler() {
        console.log('close');
        props.onCloseModal();
    }

  return (
    <div className='backdrop' onClick={closeHandler}></div>
  )
}

export default Backdrop;