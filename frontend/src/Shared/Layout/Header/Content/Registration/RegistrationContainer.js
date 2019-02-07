import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import ButtonContainer from './Button/ButtonContainer'
import InputContainer from './Input/InputContainer'

const Registration = createComponent(() => ({
  display: 'flex',
  position: 'relative'
}))

const RegistrationContainer = ({ RegistrationStore }) => (
  <Registration>
    <InputContainer value={RegistrationStore.email} onInput={RegistrationStore.handleChange} />
    <ButtonContainer onClick={RegistrationStore.handleSubmit}>Sign Up!</ButtonContainer>
  </Registration>
)

export default inject('RegistrationStore')(observer(RegistrationContainer))
