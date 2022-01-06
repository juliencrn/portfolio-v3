import { Project } from '../../types';

// Example (2022, 2019) -> [2022, 2021, 2020, 2019]
export function getArrayOfYear(from: number, to: number): number[] {
  const years = [];
  for (let year = from; year >= to; year--) {
    years.push(year);
  }
  return years;
}

export function createProject(project: Partial<Project>): Project {
  return {
    title: 'Unnamed',
    excerpt: 'Recently I ran into an issue using the useLocalStorage hook from useHooks.com',
    year: 2022,
    image: 'https://via.placeholder.com/500',
    link: 'http://localhost:3000/',
    tags: ['react', 'next', 'typescript'],
    ...project,
  };
}

function generateFakeProjects(): { year: number, projects: Project[] }[] {
  const projectByYear = [];
  for (let year = 2022; year >= 2015; year--) {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      projects.push(createProject({ year }));
    }
    projectByYear.push({ year, projects });
  }
  return projectByYear;
}

export const featuredProjects = ['useHooks', 'Chefclub', 'SpaceDicks', 'Slack clone']
  .map((title) => createProject({ title }));

export const allProjects = generateFakeProjects();
