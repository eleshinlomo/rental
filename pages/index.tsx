
import DigitalContract from "./(apps)/digitalcontractpage/page"
import RentDue from "./(apps)/rentduepage/page"
import RentPayment from "./(apps)/rentpaymentpage/page"
import LandingPage from "./(landingpage)/page"
import NavBar from "./components/NavBar"
import Messaging from "./messagingpage/page"

const App = ()=>{

  return (

    <div>
      <NavBar />
      <LandingPage />
      <Messaging />
      <DigitalContract />
      <RentDue />
      <RentPayment />
      
    </div>
  )
  
}

export default App