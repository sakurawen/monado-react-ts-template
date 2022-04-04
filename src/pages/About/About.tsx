import Content from './Content.mdx';
import { useMDXComponents } from '@mdx-js/react';
const About = () => {
	const components = useMDXComponents();
	return (
		<div className='my-12 max-w-3xl mx-auto'>
			<Content components={components} />
		</div>
	);
};

export default About;
