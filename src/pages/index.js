import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <div tw="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
              <h2 tw="text-xl font-semibold text-blue-500">Open-source</h2>
              <p tw="text-sm my-2"><h3 tw="font-bold inline">Maintainer.</h3> Core Team member of <a href="https://symfony.com">Symfony</a> and <a href="https://api-platform.com">API Platform</a>. Creator of Companienv, Tolerance and <a href="https://github.com/sroze?tab=repositories&q=&type=source">10+ more</a>.</p>
              <p tw="text-sm"><h3 tw="font-bold inline">Contributed to (ordered by stars).</h3> Kubernetes, Traefik, Composer, cucumber-js, Doctrine, Behat, Tsuru, Alice, HWIOAuthBundle, PhpSpec, LexikJWTAuthenticationBundle, ttorrent, N3.js and <a href="https://github.com/sroze?tab=overview">100+ more</a>.</p>
          </div>
          <div>
              <h2 tw="text-xl font-semibold text-green-500">Conference Talks</h2>
              <p>Yayyaa</p>
              <p>Yayyaa</p>
              <p>Yayyaa</p>
              <p>Yayyaa</p>
          </div>
          <div>
              <h2 tw="text-xl font-semibold text-yellow-500">Articles</h2>
          </div>
          <div>
              <h2 tw="text-xl font-semibold text-indigo-500">Projects</h2>
              <p>Board Alive</p>
              <p>Let's Experiment</p>
              <p>TTH</p>
          </div>
          <div>
              <h2 tw="text-xl font-semibold text-pink-500">Archived projects</h2>
              <p>ContinuousPipe</p>
              <p>Avocado</p>
              <p>Les-Horaires</p>
              <p><code>url</code> PostgreSQL extension</p>
          </div>
      </div>
  </Layout>
)

export default IndexPage
