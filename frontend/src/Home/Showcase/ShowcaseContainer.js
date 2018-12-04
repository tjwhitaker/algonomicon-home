import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import inception from './inception.jpg'

const styles = {
  image: () => ({
    marginBottom: '1.4rem'
  })
}

const Image = createComponent(styles.image, 'img', ['src', 'alt'])
class ShowcaseContainer extends Component {
  render() {
    return (
      <>
        <p>Welcome to my website! My name is Tim Whitaker and I'm a software engineer. I've worked with javascript, python, and ruby in the web space for 10 years. For the past year, I've been diving into machine learning and this website is the culmination of that experience.</p>

        <p>Thanks to increased computational power and vast amounts of data, machine learning models are capable of solving problems previously thought to be impossible.</p>

        <Image src={inception} alt="Inception Architecture" />

        <p>I'm psyched on turning this website into THE place for machine learning. Keep up to date on news. Join study groups at the cutting edge of the field. A company driven to make waves in the grand challenges that face humanity.</p>
        
        <p>I'm particularly interested in applying machine learning to the following global and social issues:</p>

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
      </>
    )
  }
}

export default ShowcaseContainer