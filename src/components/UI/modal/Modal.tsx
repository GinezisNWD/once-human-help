import { Dispatch, SetStateAction } from 'react';
import classees from './Modal.module.css';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ children, visible, setVisible }: ModalProps) {
  const rootClasses = [classees.modal];
  if (visible) rootClasses.push(classees.active);

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
