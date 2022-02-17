import { GetStaticProps } from 'next';
import { Fragment } from 'react';

import { ProjectCard, ProjectSmallCard } from '../components/ProjectCards';
import { Project } from '../types';
import projects from '../projects';
import Layout from '../components/Layout';
import AnimeOnAppear from '../components/AnimeOnAppear';

interface PageProps {
  featuredProjects: Project[]
  projectsByYears: [string, Project[]][]
}

function Projects({ featuredProjects, projectsByYears }: PageProps) {
  return (
    <Layout backgroundIndex={8}>
      <div className="max-w-4xl mx-auto w-full p-4">
        <AnimeOnAppear direction="top">
          <section className="my-12 md:my-24">
            <h1 className="title text-glow h1 mb-4 tracking-tight">
              Work, learn, open-source.
            </h1>
            <p className="h3 subtitle mb-4">
              I love to build stuffs, seriously, I'm addicted 🤣.
              I like both shipping a PoC or writing clean code, work on backend or frontend,
              building CLI, web, mobile, web3 applications, scripting, automating, testing...
              Currently, I'm excited about Rust and blockchain related topics.
            </p>
          </section>
        </AnimeOnAppear>

        <section className="my-12 md:my-24">
          <AnimeOnAppear>
            <h2 className="text-gray-50 h3 mb-4">
              <CodeTitle category="featured" />
            </h2>
          </AnimeOnAppear>

          <div className="my-6 md:my-12">
            {featuredProjects.map((project, i) => (
              <Fragment key={project.title}>
                <AnimeOnAppear>
                  {i > 0 && <hr className="my-6" />}
                </AnimeOnAppear>
                <AnimeOnAppear>
                  <ProjectCard {...project} />
                </AnimeOnAppear>
              </Fragment>
            ))}
          </div>
        </section>

        <section className="my-12 md:my-24">
          <AnimeOnAppear>
            <h2 className="text-gray-50 h3 mb-4">
              <CodeTitle category="public" />
            </h2>
          </AnimeOnAppear>

          <ul className="my-6 md:my-12">
            {projectsByYears.map(([year, list]) => (
              <li key={year}>
                <AnimeOnAppear>
                  <span className="title h4 mb-3 block">
                    {year}
                  </span>
                  <ul className="pl-5 mb-8">
                    {list.map((project) => (
                      <ProjectSmallCard key={project.title} {...project} />
                    ))}
                  </ul>
                </AnimeOnAppear>
              </li>
            ))}
          </ul>
        </section>
      </div>

    </Layout>

  );
}

export default Projects;

const CodeTitle = ({ category }: { category: string}) => (
  <pre className="flex flex-wrap">
    <code className="text-violet-400 mr-4">{'->'}</code>
    projects
    <code className="text-gray-50">(</code>
    <code className="text-violet-400">
      {`'${category}'`}
    </code>
    <code className="text-gray-50">)</code>
  </pre>
);

// Filter projects at the build time
export const getStaticProps: GetStaticProps = async () => {
  const featuredProjects: Project[] = [];
  const projectsByYearsMap: Record<number, Project[]> = {};

  let unFinishedCount = 0;

  // Filter projects into categories
  for (let i = 0; i < projects.length; i++) {
    // exclude un-finished project and notify me
    if (projects[i].unFinished) {
      console.warn(`warn - Project "${projects[i].title}" not published: unfinished.`);
      unFinishedCount += 1;
      // eslint-disable-next-line no-continue
      continue;
    }
    // exclude project without any link
    if (!projects[i].demoUrl && !projects[i].srcUrl) {
      console.warn(`warn - pages/projects/getStaticProps: ${projects[i].title} has not link`);
      // eslint-disable-next-line no-continue
      continue;
    }

    if (projects[i].featured) {
      featuredProjects.push(projects[i]);
    } else {
      const year = new Date(projects[i].createdAt).getFullYear();
      if (projectsByYearsMap[year]) {
        projectsByYearsMap[year].push(projects[i]);
      } else {
        projectsByYearsMap[year] = [projects[i]];
      }
    }
  }

  console.log(`info - there is ${unFinishedCount} un-finished project(s)`);

  const projectsByYears = Object
    .entries(projectsByYearsMap)
    .sort((a, b) => Number(b[0]) - Number(a[0]));

  // will be passed to the page component as props
  return { props: { featuredProjects, projectsByYears } };
};
