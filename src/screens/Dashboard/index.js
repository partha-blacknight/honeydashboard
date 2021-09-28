import React, { useContext } from "react";
import Layout from "../../components/UI/Layout";
import SimpleContainer from '../../components/UI/Container';
import TopSectionGrid from '../../components/Dashboard/TopSectionGrid';
import { DarkModeContext } from "../../components/UI/ThemeHandler";

const IndexPage = () => {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Layout>
      <SimpleContainer>
        <TopSectionGrid/>
      </SimpleContainer>
    </Layout>
  )
}

export default IndexPage;
