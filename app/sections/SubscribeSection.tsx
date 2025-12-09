import FooterNav from "../components/composite/FooterNav";
import SubscribeHeader from "../components/composite/SubscribeHeader";

export default function SubscribeSection() {
  return (
    <section className="relative mx-auto mt-[3.75rem] lg:mt-[7.5rem]">
      <div className="container px-6 lg:px-16 mx-auto">
        <SubscribeHeader
          title="Subscribe to the newsletter"
          description="Get the latest updates, tips and exclusive offers straight to your inbox. Stay informed and manage your finances smarter with Budgeta!"
        />
        <FooterNav />
      </div>
    </section>
  );
}
