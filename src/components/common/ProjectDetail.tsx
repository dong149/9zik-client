import * as React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../lib/styles/themes';
import media from '../../lib/styles/media';
import projectService from 'services/project.service';

const ProjectDetailBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  .upper-wrapper {
    ${media.small} {
      margin-top: 2rem;
    }
  }
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: ${themedPalette.text1};
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${themedPalette.text3};
  }
  section + section {
    margin-top: 2.5rem;
  }
  .foot {
    ${media.small} {
      margin-top: 2rem;
    }

    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    .link {
      display: inline-block;
      font-weight: bold;
      color: ${themedPalette.primary1};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export interface ProjectDetailProps {
  project: any;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <ProjectDetailBlock>
      <div className="upper-wrapper">
        <h2 data-testid="title">{project.title}</h2>
        <section>
          <h4>{project.description}</h4>
        </section>
        <section>{project.description}</section>
      </div>
    </ProjectDetailBlock>
  );
};

export default ProjectDetail;
