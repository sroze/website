import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Link = tw.a`mr-2 text-gray-400 hover:text-blue-500`;

export const IconLink = ({ icon, href }) => (
  <Link href={href}>
    <FontAwesomeIcon icon={icon} size="1x" />
  </Link>
);
