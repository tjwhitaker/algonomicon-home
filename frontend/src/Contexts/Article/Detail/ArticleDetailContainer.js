import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import WrapperContainer from '../../../Shared/Wrapper/WrapperContainer'


@inject('ArticleStore')
@observer class ArticleDetailContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <WrapperContainer>Article Detail</WrapperContainer>
    )
  }
}

export default ArticleDetailContainer