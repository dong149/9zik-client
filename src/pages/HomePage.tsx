import Header from 'components/base/Header';
import mockPostData from 'components/common/mock';
import ProjectCardGrid from 'components/common/ProjectCardGrid';
import HomeLayout from 'components/home/HomeLayout';
import MainResponsive from 'components/main/MainResponsive';
import React, { ErrorInfo, useEffect, useState } from 'react';
import projectService from 'services/project.service';
import styled from 'styled-components';

function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let completed = false;

    async function getProjects() {
      await projectService
        .getAll(0, 50)
        .then((response: any) => {
          console.log(response.data.content);
          setProjects(response.data.content);
        })
        .catch((e: ErrorInfo) => {
          console.log(e);
        });
    }
    getProjects();

    return () => {
      completed = true;
    };
  }, []);

  return (
    <Block>
      <Header />
      <MainResponsive>
        <HomeLayout main={<ProjectCardGrid projects={projects} />} />
      </MainResponsive>
    </Block>
  );
}

const Block = styled.div``;

export default HomePage;
