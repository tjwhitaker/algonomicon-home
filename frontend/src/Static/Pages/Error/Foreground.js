import { createComponent } from 'inferno-fela'
import { Link } from 'inferno-router'

const Content = createComponent(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}))

const Foreground = () => (
  <Link to="/">
    <Content>
      <svg
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         id="svg2"
         viewBox="0 0 729.28565 260.45918"
         height="73.50737mm"
         width="205.82062mm">
        <g
           transform="translate(-8.5714273,-88.433617)"
           id="layer1">
          <g
             id="text3336"
             style="font-style:normal;font-weight:normal;font-size:92.60771179px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1">
            <path
               id="path3341"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:416.73468018px;font-family:'04b03';-inkscape-font-specification:'04b03'"
               d="m 60.663262,193.03402 0,51.6751 52.091838,0 0,-51.6751 -52.091838,0 z M 164.84693,88.433617 l 0,156.275503 52.09184,0 0,52.09184 -52.09184,0 0,52.09183 -52.09183,0 0,-52.09183 -104.1836727,0 0,-104.18367 52.0918347,0 0,-52.09184 52.091838,0 0,-52.091833 52.09183,0 z" />
            <path
               id="path3343"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:416.73468018px;font-family:'04b03';-inkscape-font-specification:'04b03'"
               d="m 425.3061,296.38422 0,-155.44203 -104.18367,0 0,155.44203 104.18367,0 z m -104.18367,0.41674 -52.09184,0 0,-156.27551 52.09184,0 0,-52.091833 104.18367,0 0,52.091833 52.09183,0 0,156.27551 -52.09183,0 0,52.09183 -104.18367,0 0,-52.09183 z" />
            <path
               id="path3345"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:416.73468018px;font-family:'04b03';-inkscape-font-specification:'04b03'"
               d="m 581.5816,193.03402 0,51.6751 52.09183,0 0,-51.6751 -52.09183,0 z m 104.18367,-104.600403 0,156.275503 52.09183,0 0,52.09184 -52.09183,0 0,52.09183 -52.09184,0 0,-52.09183 -104.18367,0 0,-104.18367 52.09184,0 0,-52.09184 52.09183,0 0,-52.091833 52.09184,0 z" />
          </g>
        </g>
      </svg>
    </Content>
  </Link>
)

export default Foreground 