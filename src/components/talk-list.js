import "twin.macro"
import { IconLink } from "./iconLink"
import {
  faChalkboardTeacher,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Link } from "./link"

export const TalkList = ({ talks }) => (
  <ul tw="mt-2 text-sm">
    {talks.map(({ name, conference, date, link, slides, recording }, i) => (
      <li key={i}>
        <span tw="font-mono text-gray-400">
          {new Intl.DateTimeFormat("en-GB").format(new Date(date))} -{" "}
        </span>
        <Link href={link} tw={"mr-1"}>
          {name} @ {conference}
        </Link>
        {slides ? <IconLink icon={faChalkboardTeacher} href={slides} /> : null}
        {recording ? <IconLink icon={faPlayCircle} href={recording} /> : null}
      </li>
    ))}
  </ul>
)
