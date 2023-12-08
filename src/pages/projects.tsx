import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

import { ProjectList, SmallProjectList } from '../components/ProjectCards';
import { Project } from '../types';
import projects from '../projects';
import Layout from '../components/Layout';
import AnimeOnAppear from '../components/AnimeOnAppear';
import { info, warn } from '../logger';

interface PageProps {
  currentProjects: Project[];
  featuredProjects: Project[];
  projectsByYears: [string, Project[]][];
}

function Projects({
  currentProjects,
  featuredProjects,
  projectsByYears,
}: PageProps) {
  return (
    <Layout backgroundIndex={8}>
      <div className="max-w-4xl mx-auto w-full p-4">
        <AnimeOnAppear direction="top">
          <section className="my-12 md:my-24">
            <h1 className="title text-glow h1 mb-4 tracking-tight">
              Work, learn, open-source.
            </h1>
            <p className="h3 subtitle mb-4">
              {`I love to build stuff – seriously, I'm addicted! 🤣 From shipping up quick Proof of Concepts to crafting squeaky-clean code, I'm all about diving into backend, frontend, CLI, web, mobile, web3 applications, scripting, automation, and testing. Currently, I'm excited about web3, software craftsmanship and FP.`}
            </p>
          </section>
        </AnimeOnAppear>

        {currentProjects.length > 0 && (
          <Section title="current">
            <ProjectList projects={currentProjects} />
          </Section>
        )}

        {featuredProjects.length > 0 && (
          <Section title="featured">
            <ProjectList projects={featuredProjects} />
          </Section>
        )}

        <Section title="public">
          <SmallProjectList projectsByYears={projectsByYears} />
        </Section>
      </div>
    </Layout>
  );
}

export default Projects;

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="my-12 md:my-24">
    <AnimeOnAppear>
      <h2 className="text-gray-50 h3 mb-4">
        <CodeTitle category={title} />
      </h2>
    </AnimeOnAppear>

    {children}
  </section>
);

const CodeTitle = ({ category }: { category: string }) => (
  <pre className="flex flex-wrap">
    <code className="text-violet-400 mr-2 md:mr-4">{'|>'}</code>
    projects
    <code className="text-gray-50">(</code>
    <code className="text-violet-400">{`'${category}'`}</code>
    <code className="text-gray-50">)</code>
  </pre>
);

// Filter projects at the build time
export const getStaticProps: GetStaticProps = async () => {
  const currentProjects: Project[] = [];
  const featuredProjects: Project[] = [];
  const projectsByYearsMap: Record<number, Project[]> = {};
  let unFinishedCount = 0;

  // Filter projects into categories
  for (const project of projects) {
    // exclude un-finished project and notify me
    if (project.unFinished) {
      warn(`Project "${project.title}" not published: unfinished.`);
      unFinishedCount += 1;
      continue;
    }
    // Notice that there is a missing link
    if (!project.demoUrl && !project.srcUrl) {
      warn(`pages/projects/getStaticProps: ${project.title} has not link`);
    }

    if (project.currently) {
      currentProjects.push(project);
    } else if (project.featured) {
      featuredProjects.push(project);
    } else {
      const year = new Date(project.createdAt).getFullYear();
      if (projectsByYearsMap[year]) {
        projectsByYearsMap[year].push(project);
      } else {
        projectsByYearsMap[year] = [project];
      }
    }
  }

  info(`there is ${unFinishedCount} un-finished project(s)`);

  const props = {
    currentProjects,
    featuredProjects,
    projectsByYears: Object.entries(projectsByYearsMap).sort(
      (a, b) => Number(b[0]) - Number(a[0]), // Sorted by year
    ),
  };

  return { props };
};
