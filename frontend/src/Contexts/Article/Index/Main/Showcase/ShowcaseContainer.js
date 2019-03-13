import { createComponent } from 'inferno-fela'
import FeatureContainer from './Feature/FeatureContainer'
import GridContainer from './Grid/GridContainer'

const Showcase = createComponent(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}))

const ShowcaseContainer = ({ articles }) => {
  const [head, ...tail] = articles

  return (
    <Showcase>
      { head && <FeatureContainer article={head} /> }
      { tail && <GridContainer articles={tail} /> }
    </Showcase>
  )
}

export default ShowcaseContainer