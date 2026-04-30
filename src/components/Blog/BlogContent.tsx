"use client";

import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import AdCard from './AdCard';

const BlogContent = ({ content }: { content: string }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'a') {
        const href = domNode.attribs.href;
        const className = domNode.attribs.class || '';
        
        // Convert to AdCard if:
        // 1. It links to voguemesh.in
        // 2. Or it has the class 'ad-link'
        // 3. Or it's a standalone link (e.g. text is the same as href)
        if (href && (href.includes('voguemesh.in') || className.includes('ad-link'))) {
          return <AdCard url={href} />;
        }
      }
    },
  };

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none mb-10
      [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:dark:text-white [&_h2]:mt-8 [&_h2]:mb-4
      [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-black [&_h3]:dark:text-white [&_h3]:mt-6 [&_h3]:mb-3
      [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-black [&_h4]:dark:text-white [&_h4]:mt-4 [&_h4]:mb-2
      [&_p]:text-body-color [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:sm:text-lg [&_p]:sm:leading-relaxed
      [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
      [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2
      [&_li]:text-body-color [&_li]:text-base [&_li]:leading-relaxed
      [&_blockquote]:bg-primary/10 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:p-6 [&_blockquote]:rounded-md [&_blockquote]:my-8 [&_blockquote]:italic
      [&_strong]:font-bold [&_strong]:text-black [&_strong]:dark:text-white
      [&_a]:text-primary [&_a]:underline [&_a]:hover:opacity-80"
    >
      {parse(content, options)}
    </div>
  );
};

export default BlogContent;
