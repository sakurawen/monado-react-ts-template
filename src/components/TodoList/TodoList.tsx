import { FC, useState, useRef } from 'react';

type ListItem = {
	text: string;
};
const TodoList: FC = () => {
	const [val, setVal] = useState('');
	const [list, setList] = useState<ListItem[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const handleAppendListItem = () => {
		if (val.trim().length === 0) {
			return;
		}
		const newList = [...list];

		newList.push({
			text: val,
		});
		setList(newList);
		setVal('');
    inputRef.current?.focus();
	};
	const handleDelListItem = (delIndex: number) => {
		const newList = [...list];
		newList.splice(delIndex, 1);
		setList(newList);
	};
	const handleEnterDown = (e: React.KeyboardEvent) => {
		if (e.key !== 'Enter') {
			return;
		}
		handleAppendListItem();
	};
	return (
		<div className='mt-12'>
			<div className='mx-auto max-w-sm px-2 selection:bg-sky-200/70 selection:text-sky-500'>
				<h2 className='text-4xl leading-snug font-black text-transparent bg-gradient-to-tr  bg-clip-text to-sky-900 from-sky-500  '>
					Monado
					<br />
					React Template
				</h2>
				<div className='mt-4'>
					<ol>
						{list.length ? (
							list.map((item, index) => {
								return (
									<li
										className='text-left group mb-2  hover:px-2 transition-all px-0 hover:bg-sky-100   rounded-md list-inside'
										key={index}
									>
										<div className='flex h-10 py-2 box-border items-center justify-between'>
											<span className='flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap'>
												<i className='w-2 h-2 align-middle inline-block text-sky-900 not-italic mr-2 rounded-full bg-sky-300 text-center text-sm'></i>
												<span className='text-sm'>{item.text}</span>
											</span>
											<button
												onClick={() => handleDelListItem(index)}
												className='group-hover:opacity-100 opacity-0 p-1 hover:text-sky-600 hover:ring-2 hover:ring-sky-600 rounded-md'
											>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 '
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='2'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
											</button>
										</div>
									</li>
								);
							})
						) : (
							<div className='text-gray-300 text-center p-2 border-2 rounded-md border-dashed select-none'>
								empty
							</div>
						)}
					</ol>
				</div>
				<div className='mt-4'>
					<input
						ref={inputRef}
						onKeyDown={handleEnterDown}
						value={val}
						onChange={(e) => setVal(e.target.value)}
						className='w-full rounded-md p-2 ring-1 ring-gray-300 focus:ring-sky-300 outline-none focus:border-none border-none'
						type='text'
					/>
					<div
						onClick={handleAppendListItem}
						className='py-2 px-8 ring-offset-1 text-center bg-sky-600 ring-0 hover:ring-2 hover:bg-sky-700 transition 
            text-white select-none cursor-pointer ring-sky-300  mt-4  rounded-md'
					>
						Append
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
