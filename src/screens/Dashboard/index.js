import React from "react";
import Layout from "../../components/UI/Layout";
import SimpleContainer from '../../components/UI/Container';
import TopSectionGrid from '../../components/Dashboard/TopSectionGrid';
import LiveAttacks from '../../components/Dashboard/LiveAttacks';
import AttackByCountry from '../../components/Dashboard/AttackByCountry';
import AttackByIP from '../../components/Dashboard/AttackByIP';
import AttacksSummary from '../../components/Dashboard/AttackSummary';
import RealtimeLogsTable from '../../components/Dashboard/RealtimeLogsTable';
import './css/dashboard.css';

const Dashboard = () => {
  return (
    <Layout>
      <SimpleContainer>
        <TopSectionGrid/>
        <LiveAttacks/>
        <RealtimeLogsTable/>
        <AttackByCountry/>
        <AttackByIP/>
        <AttacksSummary/>
      </SimpleContainer>
    </Layout>
  )
}

export default Dashboard;
