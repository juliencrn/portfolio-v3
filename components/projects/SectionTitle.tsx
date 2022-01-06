import { FC } from 'react';

const CodeParenthesis: FC = ({ children }) => (
  <span>
    <span className="text-white">(</span>
    <span className="text-violet-400">
      {`'${children}'`}
    </span>
    <span className="text-white">)</span>
  </span>
);

const SectionTitle: FC = ({ children }) => (
  <h2 className="title h3 mt-16 mb-6">
    <code className="font-mono flex flex-wrap">
      projects
      <CodeParenthesis>
        {children}
      </CodeParenthesis>
    </code>
  </h2>
);

export default SectionTitle;
