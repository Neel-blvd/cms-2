import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';

type ItemType = {
  id: UniqueIdentifier;
  title: string;
};

const Item = ({ id, title }: ItemType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'item',
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'px-2 py-4 bg-neutral-300 shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center text-black justify-between"{...listeners}>
        {title}
        {
          title == 'Jane Doe' || title == 'High High'
            ?
              <p className={`${title=='Jane Doe' || title=='High High' ? 'bg-slate-700 text-white' : 'bg-green-700 text-white'}   py-1 rounded-xl px-3`}>
                Criminal
              </p>
            :
              title == 'Example Example' || title == 'Medium Medium 2'
              ?
                <p className={`bg-green-700 text-white py-1 rounded-xl px-3`}>
                  Civil
                </p>
              :
                <p className={`${title=='Jane Doe' ? '' : 'bg-amber-700 text-white'}   py-1 rounded-xl px-3`}>
                  Family
                </p>
          }
      </div>
    </div>
  );
};

export default Item;