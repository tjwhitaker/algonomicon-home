import { Component } from 'inferno'

class ShowcaseContainer extends Component {
  render() {
    return (
      <div className="showcase-container">
        <h1>What is the future of machine learning?</h1>
        <p>Thanks to increased computational power and vast amounts of data, we can use machine learning to conquer tasks that were previously thought to be impossible. We're hoping to use the power of machine learning to do real good in this world.</p>

        <p>We're a study group. We're a research lab. We're a company driven to make waves in the grand challenges that face humanity.</p>
        
        <p>We're particularly interested in the following global and social issues:</p>

        <ul>
          <li>Climate Change and The Destruction of Nature</li>
          <li>Water Scarcity and Pollution</li>
          <li>Poverty, Disease and Malnutrition</li>
          <li>Overpopulation and Global Education</li>
          <li>Transparency and Misinformation Campaigns</li>
          <li>Cyber Threats and Regional Stability</li>
          <li>Animal Conservation and Renewable Energy</li>
        </ul>

        <p>If you own or work at a company that is tackling global or social issues, we'd love to get in touch. Feel free to visit our <a href="/contact">contact page</a> or reach out directly to info@algonomicon.com.</p>
      </div>
    )
  }
}

export default ShowcaseContainer