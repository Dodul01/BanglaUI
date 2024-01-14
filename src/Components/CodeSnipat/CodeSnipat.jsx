import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ClipbordBtn from '../ClipbordBtn/ClipbordBtn';

const CodeSnippet = ({ codeString }) => {

  return (
    <div className='relative'>
      <div className='absolute top-1 right-1'>
        <ClipbordBtn textToCopy={codeString} />
      </div>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
