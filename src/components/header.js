import PropTypes from "prop-types"
import React from "react"

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import tw from "twin.macro"
import { IconLink } from "./iconLink"
import profileImage from "../images/profile.jpeg"

const Image = tw.img`
  w-16 h-16 rounded-xl`

const Title = tw.h1`text-2xl text-gray-800 inline-block mr-3`

const Header = ({ siteTitle }) => (
  <div tw="flex flex-row pt-2 my-6">
    <Image src={profileImage} />
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
