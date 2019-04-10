const Authentication = {
  isAuthenticated: false,
  
  async checkAuthentication() {
    const response = await fetch(`${process.env.INFERNO_APP_API}/authenticate`)
    const value = await response.json()

    this.isAuthenticated = value
  }
} 

export default Authentication