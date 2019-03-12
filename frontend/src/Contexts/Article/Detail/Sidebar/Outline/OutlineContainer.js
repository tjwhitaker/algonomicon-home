import { createComponent } from 'inferno-fela'
import { Minion, LongPrimer } from '../../../../../Shared/Theme/Text'

const Outline = createComponent(() => ({
  padding: '1.5rem 0',
  fontFamily: 'sans-serif',

  '> ul': {
    listStyle: 'none',

    '> li': {
      padding: '0.5rem 0',

      '> ul': {
        margin: '1rem 0 1.5rem 0',
        paddingLeft: '1.5rem'
      }
    }
  }
}), LongPrimer, ['dangerouslySetInnerHTML'])

const OutlineContainer = ({ article }) => (
  <div>
    <Minion>Outline</Minion>
    { article && 
      <Outline dangerouslySetInnerHTML={{__html: article.outline}} />
    }
  </div>
)

export default OutlineContainer