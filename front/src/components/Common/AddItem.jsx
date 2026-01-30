import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { openModal } from '../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';

const AddItem = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ modalType: 'create', task: null }));
  };

  return (
    <div className="add-card item w-1/3 h-[25vh] p[0.25rem]">
      <div className="w-full b-full border border-gray-500 rounded-md items-center justify-center">
        <button className="flex group" onclick={handleOpenModal}>
          <IoAddCircleOutline className="" />
          <span className="text-gray">할 일 추가하기</span>
        </button>
      </div>
    </div>
  );
};

export default AddItem;
