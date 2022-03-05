import { mediaQuery } from 'lib/styles/media';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

export type ProjectCardGridProps = {
  projects: any[];
};

function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  return (
    <Block>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
  }
`;

export default ProjectCardGrid;
