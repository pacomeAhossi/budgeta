import FeaturesHeader from "../components/composite/FeaturesHeader";
import FeatureCard from "../components/composite/FeatureCard";
import CreditCardStack from "../components/composite/CreditCardStack";
import TransactionList from "../components/composite/TransactionList";
import PhoneMockup from "../components/composite/PhoneMockup";
export default function Features() {
  return (
    <section className="relative z-30 bg-white -mt-32 lg:-mt-40  rounded-[3rem] pt-[2.5rem] lg:pt-20 pb-20 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <FeaturesHeader
          badge="Features"
          title="Why choose budgeta?"
          description="Empowering you to take control of your finances with these top-notch features."
        />

        {/* Feature Card  */}
        <FeatureCard
          title="Budget tracking"
          description="With the Budget Tracking feature, you can create budgets for different spending categories, such as food, transportation, entertainment, and more."
          bulletPoints={[
            "Set realistic budgets based on your income",
            "Track daily expenses to ensure you stay within your set budget",
            "Alerts when approaching the budget limit",
          ]}
          mockup={<CreditCardStack />}
          mockupPosition="right"
          delay={0}
        />

        {/* Feature card pour liste de transactions */}
        <FeatureCard
          title="Expense tracker"
          description="The Expense Tracker feature allows you to log every expense automatically."
          bulletPoints={[
            "Log expense in real-time",
            "Categorize expenses for easier understanding",
            "Support for importing transaction data from bank accounts or digital wallets",
          ]}
          mockup={<TransactionList variant="single" />}
          mockupPosition="left"
          delay={200}
        />

        {/* Feature card pour Multi-currency Support */}
        <FeatureCard
          title="Multi-currency support"
          description="The Multi-Currency Support feature allows you to manage your finances in multiple currencies. If fou often travel or transact with people overseas, this feature is extremely useful."
          bulletPoints={[
            "Support for various international currencies",
            "Automatic conversion of transactions based on current exchange rates",
            "Ideal for those who frenquently transact in foreign currencies",
          ]}
          mockup={<PhoneMockup />}
          mockupPosition="right"
          delay={300}
        />
      </div>
    </section>
  );
}
