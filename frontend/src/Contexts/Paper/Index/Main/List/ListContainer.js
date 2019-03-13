import PostContainer from './Post/PostContainer'

const ListContainer = ({ papers }) => (
  <div>
    { papers.map(paper => 
      <PostContainer paper={paper} />
    )}
  </div>
)

export default ListContainer