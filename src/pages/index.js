import React from "react"
import Layout from "../components/Layout"
import Top from "../components/Top"
import SectionTitle from "../components/SectionTitle"
import Works from "../components/Works"
import Career from "../components/Career"
import Activity from "../components/Activity"

export default () => (
  <Layout>
    <Top />
    <SectionTitle
      title="WORKS"
      subtitle="制作実績など"
    />
    <Works />
    <Career />
    <SectionTitle
      title="ACTIVITY"
      subtitle="活動"
    />
    <Activity />
  </Layout>
)