import { useMDXComponents } from '@mdx-js/react';
import Content from './Content.mdx';

const About = () => {
	const components = useMDXComponents();
	return (
		<div className='my-12 max-w-3xl mx-auto dark:text-gray-200'>
			<Content components={components} />
		</div>
	);
};

export default About;
