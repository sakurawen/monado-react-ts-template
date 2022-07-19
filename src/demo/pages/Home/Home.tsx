import TodoList from '@/demo/components/TodoList';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
	const { t } = useTranslation();
	return (
		<div className='mt-36 mx-auto max-w-sm'>
			<h2 className='text-4xl leading-snug font-black text-transparent bg-gradient-to-tr  bg-clip-text to-teal-500 from-teal-300 dark:to-teal-300 dark:from-teal-500'>
				Monado
				<br />
				React Template
			</h2>
			<p className='text-gray-800 dark:text-gray-400 font-noto-sans text-sm my-2 leading-normal'>
				{t('desc')}
			</p>
			<TodoList />
		</div>
	);
};

export default Home;
