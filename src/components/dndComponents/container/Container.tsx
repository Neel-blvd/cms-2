import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';


const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'w-full h-full p-4 bg-neutral-600 rounded-xl flex flex-col gap-y-4',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-center"{...listeners}>
        <div className="flex flex-col items-center gap-y-1">
          <p className="text-white text-xl">{title}</p>
          <p className='border w-10 mt-3 mb-3'></p>
          <p className="text-gray-400 text-center text-sm">{description}</p>
        </div>
      </div>

      {children}
      {/* style the button */}
      <button onClick={onAddItem} className='w-fit mx-auto p-2 rounded-xl hover:bg-neutral-800 text-white'>  
        Add Client
      </button>
    </div>
  );
};

export default Container;