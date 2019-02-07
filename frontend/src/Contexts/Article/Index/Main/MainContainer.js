import { css } from 'glamor'
import { inject, observer } from 'inferno-mobx'
import { main } from '../../../../Shared/Theme/Layout'
import FeatureContainer from './Feature/FeatureContainer'
import GridContainer from './Grid/GridContainer'

const showcase = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
})

const MainContainer = ({ ArticleStore }) => {
  ArticleStore.fetchArticles()
  const [feature, ...articles] = ArticleStore.articles

  return (
    <div {...main}>
      { feature && articles && (
        <div {...showcase}>
          <FeatureContainer article={feature} />
          <GridContainer articles={articles} />
        </div>
      )}
    </div>
  )
}

export default inject('ArticleStore')(observer(MainContainer))