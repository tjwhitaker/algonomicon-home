const request = require('request')

const seedArticles = () => {
  const articles = [{
    name: 'test',
    slug: 'test-slug',
    hero: 'https://source.unsplash.com/600x300',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore natus accusantium explicabo dolorum, unde facilis atque numquam placeat quidem dolore. Esse voluptate, eius! Aut deleniti eaque, iste est magni.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil error amet harum nobis fugit nemo modi placeat dolorem expedita, nesciunt! Quaerat natus porro autem molestiae a delectus fuga culpa saepe?'
  }]
  
  articles.each(article => {
    let options = {
      uri: 'http://localhost:8000/articles',
      method: 'POST',
      json: article
    }

    request.post(options, () => {
      console.log('Posted')
    })
  })
}

const seedDatasets = () => {
  const datasets = [{}]

  datasets.each(dataset => {
    let options = {
      uri: 'http://localhost:8000/datasets',
      method: 'POST',
      json: dataset
    }

    request.post(options, () => {
      console.log('Posted')
    })
  })
}

const seedEvents = () => {
  const events = [{}]

  events.each(event => {
    let options = {
      uri: 'http://localhost:8000/events',
      method: 'POST',
      json: event
    }

    request.post(options, () => {
      console.log('Posted')
    })
  })
}

const seedPapers = () => {
  const papers = [{}]

  papers.each(paper => {
    let options = {
      uri: 'http://localhost:8000/papers',
      method: 'POST',
      json: paper
    }

    request.post(options, () => {
      console.log('Posted')
    })
  })
}

const seedProjects = () => {
  const projects = [{}]

  projects.each(project => {
    let options = {
      uri: 'http://localhost:8000/projects',
      method: 'POST',
      json: project
    }

    request.post(options, () => {
      console.log('Posted')
    })
  })
}

seedArticles()