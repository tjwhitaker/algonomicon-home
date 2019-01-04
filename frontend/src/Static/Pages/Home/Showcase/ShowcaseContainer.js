import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import inception from './inception.jpg'

const styles = {
  image: () => ({
    marginBottom: '1.4rem'
  }),
  quote: () => ({
    borderLeft: '5px solid #ccc',
    paddingLeft: '1.4rem',
    paddingTop: '0.7rem',
    paddingBottom: '0.7rem',
    marginBottom: '1.4rem'
  })
}

const Image = createComponent(styles.image, 'img', ['src', 'alt'])
const Quote = createComponent(styles.quote, 'blockquote')

class ShowcaseContainer extends Component {
  render() {
    return (
      <>
        <p>Welcome to Algonomicon! Machine learning is DOPE. Thanks to increased computational power and vast amounts of data, machine learning models are capable of solving problems previously thought to be impossible.</p>

        <p>This website is a growing collection of content exploring the fun and power of machine learning.</p>

        <Image src={inception} alt="Inception Architecture" />

        <p>We're big proponents of open source software. If you get some benefit out of our content, we ask that you pay it forward and present your own work as open source.</p>

        <Quote>The best way to predict the future is to invent it.</Quote>

        <p>We'd really like to work on some big problems that face humanity. We're particularly interested in these topics:</p>
        
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