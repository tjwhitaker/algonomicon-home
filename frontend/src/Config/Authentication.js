const Authentication = {
  
  async checkAuthentication() {
    const options = {
      method: 'GET',
      credentials: 'include'
    }

    const response = await fetch(`${process.env.INFERNO_APP_API}/validate`, options)
    const data = await response.json()

    console.log(data)

    return false 
  }
} 

export default Authentication