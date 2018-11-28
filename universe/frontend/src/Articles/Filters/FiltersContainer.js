import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'

const styles = {
  heading: () => ({
    color: '#333',
    borderBottom: '1px solid #ccc',
    fontSize: '1.4rem',
    padding: '1.4rem 0',
    lineHeight: '1',
    fontFamily: 'monospace',
    display: 'block',
    textTransform: 'uppercase'
  }),
  sort: () => ({
    display: 'flex',
    padding:'1.4rem 0'
  }),
  order: () => ({
    flex: '0 0 50%'
  }),
  timeScale: () => ({
    flex: '0 0 50%'
  }),
  option: () => ({
    margin: '0',
    display: 'block',
    color:'#aaa'
  }),
  search: () => ({
    padding: '1.4rem 0'
  }),
  inputContainer: () => ({
    position: 'relative',
    width: '100%'
  }),
  icon: () => ({
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1.4rem',
    lineHeight: '1',
    color: '#aaa'
  }),
  input: () => ({
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingRight: '1rem',
    paddingLeft: '4rem',
    border: '1px solid #ccc'
  }),
  tags: () => ({
    padding: '1.4rem 0'
  }),
  tag: () => ({
    display: 'inline-block',
    marginRight: '1.4rem',
    color: '#aaa'
  })
}

const Heading = createComponent(styles.heading, 'h3')
const Sort = createComponent(styles.sort)
const Order = createComponent(styles.order)
const TimeScale = createComponent(styles.timeScale)
const Option = createComponent(styles.option, 'a')
const Search = createComponent(styles.search)
const InputContainer = createComponent(styles.inputContainer)
const Icon = createComponent(styles.icon)
const Input = createComponent(styles.input, 'input', ['type', 'placeholder'])
const Tags = createComponent(styles.tags)
const Tag = createComponent(styles.tag, 'a')

class FiltersContainer extends Component {
  render() {
    return (
      <div>
        <Heading>Search</Heading>
        <Search>
          <InputContainer>
            <Icon>
              <svg style="display:block" aria-hidden="true" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </Icon>
            <Input type="text" placeholder="Articles, Datasets, Research and more..." />
          </InputContainer>
        </Search>
        <Heading>Filters</Heading>
        <Sort>
          <Order>
            <Option>Recent</Option>
            <Option>Featured</Option>
            <Option>Trending</Option>
            <Option>Favorites</Option>
          </Order>
          <TimeScale>
            <Option>All Time</Option>
            <Option>Past Year</Option>
            <Option>Past Month</Option>
            <Option>Past Week</Option>
          </TimeScale>
        </Sort>
        <Heading>Tags</Heading>
        <Tags>
          <Tag>Art</Tag>
          <Tag>Fun</Tag>
          <Tag>Games</Tag>
          <Tag>General</Tag>
          <Tag>News</Tag>
          <Tag>Language</Tag>
          <Tag>Vision</Tag>
          <Tag>Art</Tag>
          <Tag>Fun</Tag>
          <Tag>Games</Tag>
          <Tag>General</Tag>
          <Tag>News</Tag>
          <Tag>Language</Tag>
          <Tag>Vision</Tag>
          <Tag>Art</Tag>
          <Tag>Fun</Tag>
          <Tag>Games</Tag>
          <Tag>General</Tag>
          <Tag>News</Tag>
          <Tag>Language</Tag>
          <Tag>Vision</Tag>
        </Tags>
      </div>
    )
  }
}

export default FiltersContainer