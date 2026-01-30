import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { openModal } from '../../redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddItem = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ modalType: 'create', task: null }));
  };

  return (
    <div className="add-card item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full b-full border border-gray-500 rounded-md items-center justify-center">
        <button
          className="flex items-center gap-2 group"
          onClick={handleOpenModal}
        >
          <IoAddCircleOutline className="w-8 h-8 text-gray-400 font-light group-hover:text-gray-200" />
          <span className="text-gray-400 group-hover:text-gray-200">
            할 일 추가하기
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddItem;
