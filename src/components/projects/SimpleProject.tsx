import { Project } from '../../types';

function SimpleProject({ title, link, excerpt }: Project) {
  return (
    <li className="mb-1">
      <a href={link} className="text-gray-50" target="_blank" rel="noreferrer">
        <h4 className="underline inline">{title}</h4>
      </a>
      <span>{`: ${excerpt}`}</span>
    </li>
  );
}

export default SimpleProject;
