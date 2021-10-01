import React from "react";
import Layout from "../../components/UI/Layout";
import SimpleContainer from '../../components/UI/Container';
import TopSectionGrid from '../../components/Dashboard/TopSectionGrid';
import LiveAttacks from '../../components/Dashboard/LiveAttacks';
import AttackByCountry from '../../components/Dashboard/AttackByCountry';
import AttackByIP from '../../components/Dashboard/AttackByIP';
import ProtocolAttacks from '../../components/Dashboard/ProtocolAttack';
import RealtimeLogsTable from '../../components/Dashboard/RealtimeLogsTable';
import './css/dashboard.css';

const IndexPage = () => {
  return (
    <Layout>
      <SimpleContainer>
        <TopSectionGrid/>
        <LiveAttacks/>
        <RealtimeLogsTable/>
        <AttackByCountry/>
        <AttackByIP/>
        <ProtocolAttacks/>
      </SimpleContainer>
    </Layout>
  )
}

export default IndexPage;
