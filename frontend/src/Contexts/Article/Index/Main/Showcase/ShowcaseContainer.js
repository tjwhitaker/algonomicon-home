import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import FeatureContainer from './Feature/FeatureContainer'
import GridContainer from './Grid/GridContainer'

const Showcase = createComponent(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}))

const ShowcaseContainer = ({ ArticleStore }) => {
  ArticleStore.fetchArticles()
  const [feature, ...articles] = ArticleStore.articles

  return (
    <Showcase>
      { feature && <FeatureContainer article={feature} /> }
      { articles && <GridContainer articles={articles} /> }
    </Showcase>
  )
}

export default inject('ArticleStore')(observer(ShowcaseContainer))