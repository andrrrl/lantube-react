import './Backdrop.css';

function Backdrop(props: any) {

    function closeHandler(event: any) {
      console.log(event.target);
      
        props.onCloseModal();
    }

  return (
    <div className='backdrop' onClick={(e: any) => closeHandler(e)}></div>
  )
}

export default Backdrop;