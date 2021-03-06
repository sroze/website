import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import tw from "twin.macro"
import Layout from "./layout"
import { IconLink } from "./iconLink"

const Image = tw.img`
  w-16 h-16 rounded-xl`

const Link = tw.a`mr-2 text-gray-400 hover:text-blue-500`
const Title = tw.h1`text-2xl text-gray-800 inline-block mr-3`

const Header = ({ siteTitle }) => (
  <div tw="flex flex-row mt-2 my-6">
    <Image src={require("../images/profile.jpg")} />
    <div tw="p-1 pl-4">
      <div>
        <Title>{siteTitle}</Title>

        <IconLink
          href="https://www.linkedin.com/in/samuel-roze-1963751b/"
          icon={faLinkedin}
        />
        <IconLink href="https://github.com/sroze" icon={faGithub} />
        <IconLink href="https://twitter.com/samuelroze" icon={faTwitter} />
      </div>
      <p tw="font-mono text-xs">
        VP of Engineering at <a href="https://birdie.care">Birdie</a>. Public
        speaker & open-source maintainer.
      </p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
