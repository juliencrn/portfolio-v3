import { useRef } from 'react';
import { useHover } from 'usehooks-ts';
import cn from 'classnames';

import { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons';

export function ProjectSmallCard({
  title, demoUrl, srcUrl, excerpt, tags,
}: Project) {
  const ref = useRef(null);
  const isHover = useHover(ref);
  const link = srcUrl || demoUrl;

  return (
    <li ref={ref} className="mb-1 relative">
      <a href={link} className="text-gray-50" target="_blank" rel="noreferrer">
        <h4 className="underline inline">{title}</h4>
      </a>
      <span>{`: ${excerpt}`}</span>

      {tags.length > 0 && (
        <div
          className={cn(
            'absolute -bottom-1 left-0 py-1 px-3',
            'text-gray-900 left-0 bg-green-400 rounded-2xl shadow-lg',
            'transform transition-opacity translate-y-full ease-in-out duration-500',
            isHover ? 'opacity-100 z-10' : 'opacity-0 -z-10',
          )}
        >
          <TagList tags={tags} />
        </div>
      )}
    </li>
  );
}

export function ProjectCard({
  title, excerpt, tags, demoUrl, srcUrl,
}: Project) {
  return (
    <article>
      <div className="flex">
        <h3 className="title h4 mb-1 flex">
          {title}
        </h3>
        {srcUrl && (
          <a href={srcUrl} className="ml-3 m-1" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} className="m-1" target="_blank" rel="noreferrer">
            <ExternalLinkIcon />
          </a>
        )}
      </div>

      <p className="mb-4">{excerpt}</p>
      <p className="text-pink-400">
        <TagList tags={tags} />
      </p>
    </article>
  );
}

interface TagProps {
  tags: string[]
}

const TagList = ({ tags }: TagProps) => (
  <code className="text-sm">
    {tags.map((tag, i) => `${i > 0 ? ' ' : ''} #${tag}`)}
  </code>
);
