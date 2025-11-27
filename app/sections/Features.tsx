import FeaturesHeader from "../components/composite/FeaturesHeader";
import FeatureCard from "../components/composite/FeatureCard";
import CreditCardStack from "../components/composite/CreditCardStack";
import TransactionList from "../components/composite/TransactionList";
export default function Features() {
  return (
    <section className="relative z-30 bg-white rounded-t-[3rem] -mt-32 lg:-mt-40 pt-20 pb-20 lg:pb-32">
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
          mockup={<TransactionList />}
          mockupPosition="left"
        />
      </div>
    </section>
  );
}
