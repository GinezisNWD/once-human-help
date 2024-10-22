import { Dispatch, SetStateAction, useEffect } from 'react';
import classees from './Modal.module.css';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ children, visible, setVisible }: ModalProps) {
  const rootClasses = [classees.modal];
  if (visible) rootClasses.push(classees.active);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVisible(false)
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classees.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
