import { useState, createContext } from 'react';

const ToastContext = createContext<any | null>(null);

export function ToastContextProvider(props: any) {
  const [toast, setToast] = useState({
    title: props.title,
    subtitle: props.subtitle,
    body: props.body
  });

  const [isOpen, setIsOpen] = useState(false);

  function showToast(toastData: any, tiemoutMilliseconds: number = 4000) {
    setToast(toastData);
    setIsOpen(true);
    if(tiemoutMilliseconds) {
      setTimeout(() => {
        setIsOpen(false);
      }, tiemoutMilliseconds);
    }
  }

  function hideToast() {
    setIsOpen(false);
  }

  const context = {
    toast,
    showToast,
    hideToast,
    isOpen
  };

  return <ToastContext.Provider value={context}>
      {props.children}
  </ToastContext.Provider>

}

export default ToastContext;