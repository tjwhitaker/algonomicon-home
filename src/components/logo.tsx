import React from "react"
import { Link } from "gatsby"

const glitchBody = () => {
  const hero = document.getElementsByClassName("hero")[0]
  hero && hero.classList.add("glitched")
}

const unglitchBody = () => {
  const hero = document.getElementsByClassName("hero")[0]
  hero && hero.classList.remove("glitched")
}

export default () => (
  <div className="logo" onMouseEnter={glitchBody} onMouseLeave={unglitchBody}>
    <Link to="/" className="glitch">
      {Array.from({ length: 5 }).map((val, index) => (
        <svg
          key={index}
          className="glitch__img"
          height="31.75mm"
          width="330.2mm"
          version="1.1"
          viewBox="0 0 1170 112.5"
        >
          <g id="layer1" transform="translate(962.86 -165.58)">
            <g id="text3336">
              <path
                id="path3364"
                d="m-940.36 188.08v-22.5h45v22.5h22.5v90h-22.5v-22.5h-45v22.5h-22.5v-90h22.5zm45 45v-44.82h-45v44.82h45z"
              />
              <path
                id="path3366"
                d="m-782.86 278.08v-22.5h-45v-90h-22.5v112.5h67.5z"
              />
              <path
                id="path3368"
                d="m-670.36 188.08v-22.5h-67.5v22.5h67.5zm-67.5 0h-22.5v67.5h22.5v-67.5zm67.5 90h-67.5v-22.5h45v-22.5h-22.5v-22.5h45v67.5z"
              />
              <path
                id="path3370"
                d="m-580.36 255.4v-67.14h-45v67.14h45zm-45 0.18h-22.5v-67.5h22.5v-22.5h45v22.5h22.5v67.5h-22.5v22.5h-45v-22.5z"
              />
              <path
                id="path3372"
                d="m-467.86 233.08v45h22.5v-112.5h-22.5v45h-22.5v22.5h22.5zm-45-22.5h22.5v-22.5h-22.5v-22.5h-22.5v112.5h22.5v-67.5z"
              />
              <path
                id="path3374"
                d="m-355.36 255.4v-67.14h-45v67.14h45zm-45 0.18h-22.5v-67.5h22.5v-22.5h45v22.5h22.5v67.5h-22.5v22.5h-45v-22.5z"
              />
              <path
                id="path3376"
                d="m-287.86 188.08v-22.5h-22.5v112.5h22.5v-67.5h22.5v-22.5h-22.5zm22.5 45h22.5v-22.5h-22.5v22.5zm45-45h-22.5v22.5h22.5v67.5h22.5v-112.5h-22.5v22.5z"
              />
              <path
                id="path3378"
                d="m-130.36 188.08h22.5v-22.5h-67.5v22.5h22.5v67.5h-22.5v22.5h67.5v-22.5h-22.5v-67.5z"
              />
              <path
                id="path3380"
                d="m-17.857 188.08v-22.5h-45v22.5h45zm-45 0h-22.5v67.5h22.5v-67.5zm45 90v-22.5h-45v22.5h45z"
              />
              <path
                id="path3382"
                d="m72.143 255.4v-67.14h-45v67.14h45zm-45 0.18h-22.5v-67.5h22.5v-22.5h45v22.5h22.5v67.5h-22.5v22.5h-45v-22.5z"
              />
              <path
                id="path3384"
                d="m184.64 233.08v45h22.5v-112.5h-22.5v45h-22.5v22.5h22.5zm-45-22.5h22.5v-22.5h-22.5v-22.5h-22.5v112.5h22.5v-67.5z"
              />
            </g>
          </g>
        </svg>
      ))}
    </Link>
  </div>
)
