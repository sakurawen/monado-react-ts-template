import { useTodoList } from '@/demo/hooks';
import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { shallow } from 'zustand/shallow';

const TodoList: FC = () => {
  const { data, inputValue, setInputValue, pushListItem, delListItem, cleanInputValue } = useTodoList(
    (state) => state,
    shallow
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();
  const handleAppendListItem = () => {
    if (inputValue.trim().length === 0) {
      return;
    }
    pushListItem({ text: inputValue });
    cleanInputValue();
    inputRef.current?.focus();
  };

  const handleChangeInputVal = (val: string) => {
    setInputValue(val);
  };

  const handleDelListItem = (delIndex: number) => {
    delListItem(delIndex);
  };

  const handleEnterDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') {
      return;
    }
    handleAppendListItem();
  };

  return (
    <div>
      <div className='mt-4'>
        <ol>
          {data.length ? (
            data.map((item, index) => {
              return (
                <li
                  className='text-left group mb-2  hover:px-2 transition-all px-0 hover:bg-teal-100 dark:hover:bg-zinc-700   rounded-md list-inside'
                  key={index}>
                  <div className='flex h-10 py-2 box-border items-center justify-between'>
                    <span className='flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap'>
                      <i className='w-2 h-2 align-middle inline-block text-teal-900 not-italic mr-2 rounded-full dark:bg-teal-600 bg-teal-300 text-center text-sm'></i>
                      <span className='text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-400'>{item.text}</span>
                    </span>
                    <button
                      onClick={() => handleDelListItem(index)}
                      className='group-hover:opacity-100 opacity-0 p-1 text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 hover:ring-2 hover:ring-teal-500 dark:ring-teal-600 rounded-md'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <div className='text-gray-300 dark:text-zinc-700 dark:border-zinc-700 text-center p-2 border-2 text-sm rounded-md border-dashed select-none'>
              {t('empty-list')}
            </div>
          )}
        </ol>
      </div>
      <div className='mt-4'>
        <input
          ref={inputRef}
          onKeyDown={handleEnterDown}
          value={inputValue}
          onChange={(e) => handleChangeInputVal(e.target.value)}
          className='w-full transition text-black dark:text-gray-400 text-base rounded-md p-2 ring-1 focus:ring-2 
            ring-gray-300 dark:ring-teal-100/20 focus:ring-teal-400 dark:focus:ring-teal-600 dark:bg-zinc-800 
            outline-none focus:border-none border-none'
          type='text'
        />
        <div
          onClick={handleAppendListItem}
          className='py-2 px-8  text-center bg-teal-400 hover:bg-teal-500 dark:hover:bg-teal-300  text-black shadow-transparent transition-all  hover:shadow-lg hover:shadow-teal-400/20  ring-teal-300   
             select-none cursor-pointer   mt-4  rounded-md'>
          <span className='text-sm inline-block'>{t('add')}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
