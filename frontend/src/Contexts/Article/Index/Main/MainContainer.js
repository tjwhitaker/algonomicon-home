import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import { main } from '../../../../Shared/Theme/Layout'
import FeatureContainer from './Feature/FeatureContainer'
import GridContainer from './Grid/GridContainer'

const Showcase = createComponent(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}))

const MainContainer = ({ ArticleStore }) => {
  ArticleStore.fetchArticles()
  const [feature, ...articles] = ArticleStore.articles

  return (
    <div {...main}>
      { feature && articles && (
        <Showcase>
          <FeatureContainer article={feature} />
          <GridContainer articles={articles} />
        </Showcase>
      )}
    </div>
  )
}

export default inject('ArticleStore')(observer(MainContainer))