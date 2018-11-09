import { Component } from 'inferno'
import inception from './inception.jpg'

class ShowcaseContainer extends Component {
  render() {
    return (
      <div className="showcase-container">
        <p>Welcome to my website! My name is Tim Whitaker and I'm a software engineer. I've primarily worked with javascript/python/ruby in the web space for almost 10 years. For the past year, I've been diving into machine learning and this website is the culmination of that experience.</p>

        <p>Thanks to increased computational power and vast amounts of data, machine learning models are capable of solving problems previously thought to be impossible.</p>

        <img src={inception} alt="Inception Architecture"/>

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