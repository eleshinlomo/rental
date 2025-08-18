import Link from 'next/link'


const NavBar = ()=>{

    return (

        <div>
         <Link href='/'>Home</Link>
         <Link href='/messagingpage'>Send Message</Link>
         <Link href='/digitalcontract'>Rental Lease</Link>
         <Link href='/rentduepage'>Rent Due</Link>
         <Link href='/rentpaymentpage'>Pay Rent</Link>
        </div>
    )
}

export default NavBar