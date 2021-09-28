import React, { useContext } from "react";
import Layout from "../../components/UI/Layout";
import SimpleContainer from '../../components/UI/Container';
import TopSectionGrid from '../../components/Dashboard/TopSectionGrid';
import LiveAttackTable from '../../components/Dashboard/LiveAttackTable';
import AttackByCountry from '../../components/Dashboard/AttackByCountry';
import AttackByIP from '../../components/Dashboard/AttackByIP';
import ProtocolAttacks from '../../components/Dashboard/ProtocolAttack';
import { DarkModeContext } from "../../components/UI/ThemeHandler";

const IndexPage = () => {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Layout>
      <SimpleContainer>
        <TopSectionGrid/>
        <LiveAttackTable/>
        <AttackByCountry/>
        <AttackByIP/>
        <ProtocolAttacks/>
      </SimpleContainer>
    </Layout>
  )
}

export default IndexPage;
