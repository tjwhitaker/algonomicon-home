import { createComponent } from 'inferno-fela'
import ItemContainer from './Item/ItemContainer'

const Grid = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: '1.5rem'
}))

const GridContainer = ({ articles }) => (
  <Grid>
    { articles.map(article => 
      <ItemContainer article={article} />
    )}
  </Grid>
)

export default GridContainer