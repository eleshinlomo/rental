interface PricingCardProps {
    title: string;
    price: string;
    period: string;
    description: string;
    features: null | {};
    highlighted: boolean
}

const PricingCard = ({title, price, period, description, features, highlighted}: PricingCardProps)=>{

    return (

        <div>
            <div className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works for you. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Starter"
              price="$0"
              period="forever"
              description="Perfect for individual landlords with 1-2 properties"
              features={[
                "1 property",
                "Basic rent collection",
                "Digital contracts",
                "Email support"
              ]}
              highlighted={false}
            />
            <PricingCard 
              title="Professional"
              price="$15"
              period="/month"
              description="For landlords with multiple properties"
              features={[
                "Up to 10 properties",
                "Advanced reporting",
                "Maintenance requests",
                "Priority support"
              ]}
              highlighted={true}
            />
            <PricingCard 
              title="Enterprise"
              price="$99"
              period="/month"
              description="For property management companies"
              features={[
                "Unlimited properties",
                "Team accounts",
                "API access",
                "Dedicated account manager"
              ]}
              highlighted={false}
            />
          </div>
        </div>
      </div>
        </div>
    )
}

export default PricingCard