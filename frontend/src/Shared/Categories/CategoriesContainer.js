import { Component } from 'inferno'
import { NavLink } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import WrapperContainer from '../Wrapper/WrapperContainer'

const styles = {
  list: () => ({
    display: 'flex',
    width: '100%',
    paddingBottom: '1.4rem',
    borderBottom: '1px solid #ccc'
  }),
  link: () => ({
    marginRight: '2.8rem',
    fontWeight: 'bold',
  })
}

const List = createComponent(styles.list)
const Link = createComponent(styles.link, NavLink, ['to', 'exact', 'activeClassName'])

class CategoriesContainer extends Component {
  render() {
    return (
      <WrapperContainer>
        <List>
          <Link exact to="/" activeClassName="active">Home</Link>
          <Link to="/articles" activeClassName="active">Articles</Link>
          <Link to="/datasets" activeClassName="active">Datasets</Link>
          <Link to="/events" activeClassName="active">Events</Link>
          <Link to="/papers" activeClassName="active">Papers</Link>
          <Link to="/projects" activeClassName="active">Projects</Link>
        </List>
      </WrapperContainer>
    )
  }
}

export default CategoriesContainer