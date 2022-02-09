import FeaturedProject from '../components/projects/FeaturedProject';
import SectionTitle from '../components/projects/SectionTitle';
import SimpleProject from '../components/projects/SimpleProject';
import { allProjects, featuredProjects } from '../components/projects/utils';

function Projects() {
  return (
    <div className="max-w-5xl mx-auto w-full p-4">
      <h1 className="title h1 mt-24 mb-4">
        Work. Hobby. Open source.
      </h1>
      <p className="h3 subtitle mb-4">
        I love to build side projects [...]
      </p>

      <SectionTitle>featured</SectionTitle>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} {...project} />
        ))}
      </ul>

      <SectionTitle>all</SectionTitle>
      <ul className="mb-4">
        {allProjects.map(({ year, projects }) => (
          <li key={year}>
            <span className="title h4 mb-2 block">
              {year}
            </span>
            <ul className="list-disc pl-5 mb-6">
              {projects.map((project) => (
                <SimpleProject key={project.title} {...project} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
