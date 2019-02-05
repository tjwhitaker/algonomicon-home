import { css } from 'glamor'
import { brevier, longPrimer, pica } from '../../../../../../Shared/Theme/Text'
import { ArticleContainer } from './ArticleContainer'
import { DatasetContainer } from './DatasetContainer'
import { EventContainer } from './EventContainer'
import { PaperContainer } from './PaperContainer'
import { ProjectContainer } from './ProjectContainer'

const post = css({
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #ccc'
})

export const title = css({
  marginBottom: '0.2rem'
}, pica)

export const content = css({
  fontWeight: 'normal',
  color: '#111',
  marginBottom: '0.2rem'
}, longPrimer)

export const meta = css({
  marginBottom: 0
}, brevier)

export const PostContainer = (props) => (
  <div {...post}>
    {{ article: <ArticleContainer data={props.data} />,
      dataset: <DatasetContainer data={props.data} />,
      event: <EventContainer data={props.data} />,
      paper: <PaperContainer data={props.data} />,
      project: <ProjectContainer data={props.data} />
    }[props.data.type]}
  </div>
)
