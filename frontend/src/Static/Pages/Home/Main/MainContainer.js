import { createComponent } from 'inferno-fela'
import { Brevier, LongPrimer } from '../../../../Shared/Theme/Text'
import inception from './inception.jpg'

const Main = createComponent(() => ({
  borderRight: '1px solid #ccc',
  paddingRight: '1.5rem'
}))

const Caption = createComponent(() => ({
  margin: '1.5rem 0',
  fontStyle: 'italic'
}), LongPrimer)

const Author = createComponent(() => ({
  paddingTop: '0.2rem'
}), Brevier)

const MainContainer = () => (
  <Main>
    <p>Thanks to increased power and large amounts of data, machine learning models are capable of solving problems previously thought to be impossible. Machine Learning applications are driving cars, improving healthcare diagnosis, and sequencing new proteins. Machine learning has the power to do a lot of good and we want to tell the stories of people using it to change the world.</p>

    <img src={inception} alt="Inception Architecture" />

    <Caption>Inception: A state of the art deep learning architecture developed by the AI research team at Google.</Caption>

    <blockquote>
      Truth is much too complicated to allow anything but approximations.
      <Author>- John Von Neumann</Author>
    </blockquote>

    <p>We're particularly interested in the following research topics:</p>
    
    <ul>
      <li>Climate Change and Anthropogenic Impacts on the Environment</li>
      <li>Water Scarcity and Pollution</li>
      <li>Poverty, Disease and Malnutrition</li>
      <li>Overpopulation and Global Education</li>
      <li>Cyber Threats and Regional Stability</li>
      <li>Wildlife Conservation and Biodiversity Loss</li> 
      <li>Renewable and Alternative Energy</li>
    </ul>

    <p>If you own or work at a company that is tackling global or social issues, we'd love to get in touch. Feel free to visit our <a href="/contact">contact page</a> or reach out directly to info@algonomicon.com.</p>

    <p>We support open source software. If you like our content, please join our mission and collaborate with us on <a href="https://github.com/algonomicon">Github</a>.</p>
  </Main>
)

export default MainContainer