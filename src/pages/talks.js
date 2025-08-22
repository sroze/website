import Layout from "../components/layout"
import Seo from "../components/seo"
import React from "react"
import { TalkList } from "../components/talk-list"
import Talks from "../data/talks.yaml"

const TalksPage = () => (
  <Layout>
    <Seo title="Conference Talks" />
    <h2 tw="text-xl font-semibold text-green-500">Conference Talks</h2>

    <TalkList talks={Talks} />
  </Layout>
)

export default TalksPage
