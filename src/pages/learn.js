import React from 'react';
import Layout from '../components/Layout';
import LearnCommunity from '../components/LearnCommunity';
import LearnMenu from '../components/LearnMenu';
export default function learn() {
  return (
    <Layout>
      <LearnMenu active="learn" />
      <LearnCommunity />
    </Layout>
  );
}
