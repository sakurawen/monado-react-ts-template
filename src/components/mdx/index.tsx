import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const h1 = (props: unknown) => {
	return (
		<h1
			className='font-bold text-3xl font-noto-sans  leading-normal my-4 dark:text-gray-200'
			{...props}
		/>
	);
};

export const h2 = (props: unknown) => {
	return (
		<h2
			className='font-bold text-2xl  leading-normal my-4 font-noto-sans dark:text-gray-200'
			{...props}
		/>
	);
};

export const h3 = (props: unknown) => {
	return (
		<h3
			className='font-bold text-xl  leading-normal my-4 font-noto-sans dark:text-gray-200'
			{...props}
		/>
	);
};

export const h4 = (props: unknown) => {
	return (
		<h4
			className='font-bold text-lg  leading-normal my-4 font-noto-sans dark:text-gray-200'
			{...props}
		/>
	);
};
export const h5 = (props: unknown) => {
	return (
		<h5
			className='font-bold text-base  leading-normal my-4 font-noto-sans dark:text-gray-200'
			{...props}
		/>
	);
};
export const h6 = (props: unknown) => {
	return (
		<h6
			className='font-bold text-sm  leading-normal my-4 font-noto-sans dark:text-gray-200'
			{...props}
		/>
	);
};

export const p = (props: unknown) => {
	return (
		<p
			className=' text-base  leading-relaxed my-2.5 font-noto-sans dark:text-gray-200'
			{...props}
		/>
	);
};

export const pre = (props: unknown) => {
	return <pre className='my-6' {...props} />;
};

export const a = (props: unknown) => {
	return (
		<a
			target='_blank'
			className='font-bold underline underline-offset-1 font-noto-sans dark:text-gray-200'
			{...props}
		></a>
	);
};

export const code = (props: any) => {
	const className: string = props.className;
	if (!className) {
		return (
			<code
				className='bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-slate-200 px-1 rounded'
				{...props}
			/>
		);
	}
	const lang = className.replace('language-', '');
	return (
		<SyntaxHighlighter
			customStyle={{
				backgroundColor: 'rgb(39, 39, 42)',
			}}
			useInlineStyles={true}
			style={style}
			language={lang}
			{...props}
		></SyntaxHighlighter>
	);
};

export const img = (props: unknown) => {
	return <img className='mx-auto max-w-full my-6' {...props} />;
};

export const blockquote = (props: unknown) => {
	return (
		<blockquote
			className='rounded-sm bg-gray-100 dark:bg-zinc-800  border-l-4 pl-4 flow-root border-gray-300 dark:border-zinc-600'
			{...props}
		/>
	);
};
