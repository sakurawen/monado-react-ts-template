import Highlight, { defaultProps, Language } from 'prism-react-renderer';

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

interface CodeProps {
	className: string;
	children: string;
}
export const code = (props: unknown) => {
	const className: string = (props as CodeProps).className;
	if (!className) {
		return (
			<code
				className='bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-slate-200 px-1 rounded'
				{...props}
			/>
		);
	}
	const lang = className.replace('language-', '') as Language;
	return (
		<Highlight
			code={(props as CodeProps).children.trim()}
			language={lang}
			{...defaultProps}
			theme={undefined}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={`p-4 rounded-md ${className}`} style={style}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
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
