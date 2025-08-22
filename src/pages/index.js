import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import tw from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Talks from "../data/talks.yaml"
import { TalkList } from "../components/talk-list"
import { Link } from "../components/link"

const VisibleLink = tw(Link)`text-blue-500 hover:underline`
const VisibleGatsbyLink = tw(GatsbyLink)`text-blue-500 hover:underline`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Articles {
      allFeedMyArticles {
        edges {
          node {
            title
            link
            pubDate
          }
        }
      }
    }
  `)

  const edges = data.allFeedMyArticles?.edges || []

  return (
    <Layout>
      <Seo title="Home" />

      <div tw="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 tw="text-xl font-semibold text-yellow-500">
            📚 Last 10 articles
          </h2>
          {edges.length > 0 ? (
            <ul tw="mt-2 text-sm">
              {edges.slice(0, 10).map(({ node: { title, link, pubDate } }) => (
                <li key={link}>
                  <span tw="font-mono text-gray-400">
                    {new Intl.DateTimeFormat("en-GB").format(new Date(pubDate))}{" "}
                    -{" "}
                  </span>

                  <Link href={link}>{title}</Link>
                </li>
              ))}
              {edges.length >= 10 ? (
                <li tw="text-right">
                  <VisibleLink href="https://medium.com/@sroze">
                    Read more ➡
                  </VisibleLink>
                </li>
              ) : null}
            </ul>
          ) : (
            <p tw="text-sm text-gray-500">
              <Link href="https://medium.com/@sroze">
                Read my latest articles on Medium ➡
              </Link>
            </p>
          )}
        </div>
        <div>
          <h2 tw="text-xl font-semibold text-green-500">
            🗣️ Last 10 conference talks
          </h2>
          <TalkList talks={Talks.slice(0, 10)} />

          {Talks.length > 10 ? (
            <div tw={"text-right"}>
              <VisibleGatsbyLink to={"/talks"}>
                See {Talks.length - 10} more ➡
              </VisibleGatsbyLink>
            </div>
          ) : null}
        </div>
        <div>
          <h2 tw="text-xl font-semibold text-blue-500">Open-source</h2>
          <p tw="text-sm my-2">
            <h3 tw="font-bold inline">Maintainer.</h3> Previously Core Team
            member of <Link href="https://symfony.com">Symfony</Link> and{" "}
            <Link href="https://api-platform.com">API Platform</Link>. Creator
            of Companienv, Tolerance and{" "}
            <VisibleLink href="https://github.com/sroze?tab=repositories&q=&type=source">
              10+ more
            </VisibleLink>
            .
          </p>
          <p tw="text-sm">
            <h3 tw="font-bold inline">Contributed to (ordered by stars).</h3>{" "}
            Kubernetes, Traefik, Composer, cucumber-js, Doctrine, Behat, Tsuru,
            Alice, HWIOAuthBundle, PhpSpec, LexikJWTAuthenticationBundle,
            ttorrent, N3.js and{" "}
            <VisibleLink href="https://github.com/sroze?tab=overview">
              100+ more
            </VisibleLink>
            .
          </p>
        </div>
        <div>
          <h2 tw="text-xl font-semibold text-pink-500">Previous projects</h2>
          <p tw="text-sm">
            <span tw="font-mono text-gray-400">2018-2023</span>{" "}
            <Link href="https://birdie.care">
              <h3 tw="font-bold inline">Birdie Care</h3>. Helping elderlies to
              live healthier and longer in their own homes.
            </Link>
          </p>
          <p tw="text-sm">
            <span tw="font-mono text-gray-400">2021</span>{" "}
            <Link href="https://www.miro-board.live/">
              <h3 tw="font-bold inline">Miro Board Alive</h3>. Exposes an API or
              connect a Google Spreadsheet with your Miro boards.
            </Link>
          </p>
          <p tw="text-sm">
            <span tw="font-mono text-gray-400">2021</span>{" "}
            <Link href="https://letsexperiment-today.herokuapp.com/">
              <h3 tw="font-bold inline">Let's Experiment.</h3> Design, measure
              and track your experiments.
            </Link>
          </p>
          <p tw="text-sm">
            <span tw="font-mono text-gray-400">2019</span>{" "}
            <h3 tw="font-bold inline">Technical Team Health</h3> Metrics and
            engaging awards from Git repositories activity.
          </p>
          <p tw="text-sm">
            <Link href="https://web.archive.org/web/20190122152504/https://continuouspipe.io/">
              <span tw="font-mono text-gray-400">2017-2018</span>{" "}
              <h3 tw="font-bold inline">ContinuousPipe</h3>. Continuous
              deployment solution for your containerized applications to
              Kubernetes clusters.
            </Link>
          </p>
          <p tw="text-sm">
            <Link href="https://web.archive.org/web/20201101030614/https://getavocado.com/">
              <span tw="font-mono text-gray-400">2017</span>{" "}
              <strong>Avocado</strong>. Record and share your location and
              pictures of your travel adventures in real-time (or not).
            </Link>
          </p>
          <p tw="text-sm">
            <Link href="https://github.com/sroze/PgSQL-parse_url">
              <span tw="font-mono text-gray-400">2012</span>{" "}
              <strong>
                <code>url</code> PostgreSQL extension
              </strong>
              . Performant (parsed & indexed) storage of URLs within PostgreSQL.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
