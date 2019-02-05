import { css } from 'glamor'
import { greatPrimer } from '../../../../Shared/Theme/Text'
import inception from './inception.jpg'

const main = css({
  borderRight: '1px solid #ccc',
  paddingRight: '1.5rem'
})

const MainContainer = () => (
  <div {...main}>
    <h2 {...greatPrimer}>Welcome to The Open Source Machine Learning Community!</h2>

    <p>Thanks to increased computational power and vast amounts of data, machine learning models are capable of solving problems previously thought to be impossible. Machine Learning applications are powering self driving cars, searching for life beyond the stars, and finding subatomic particles in the Large Hadron Collider. Machine learning has the power to do a lot of good and we plan to use this power to work on some of the grand challenges that humanity faces.</p>

    <img src={inception} alt="Inception Architecture" />

    <i>Inception: A state of the art deep learning architecture developed by the AI research team at Google.</i>

    <blockquote>{'↑1 ⍵∨.∧3 4=+/,¯1 0 1∘.⊖¯1 0 1∘.⌽⊂⍵'}</blockquote>

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
  </div>
)

export default MainContainer