import '@/app.css';
import '@/demo/demo.css';
import '@/demo/i18n';
import components from '@/demo/components/mdx';
import router from '@/demo/router';
import { MDXProvider } from '@mdx-js/react';
import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

const Demo: FC = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      localStorage.setItem('theme', 'light');
      return;
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className='mx-auto max-w-2xl px-4'>
      <MDXProvider components={components}>
        <RouterProvider router={router}/>
      </MDXProvider>
    </div>
  );
};

export default Demo;
