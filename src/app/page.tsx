import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Offering } from "@/components/Offering/Offering";
import { Feedback } from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero
        title={"IMMIGRATION\nFORMS EXPERT"}
        description={
          "We Specialized In Family-Based Immigration, Adjustment Of Status, Consular Processing, Asylum/Refugee Application/Petition, Non-Immigrant Visa, VAWA, & Other Services."
        }
        ctaLabel={"LEARN MORE"}
        backgroundSrc={"/Herologo.webp"}
      />
      <Services
        title="We offer payment plans for our Service Fees"
        ctaLabel="VIEW ALL CATEGORY"
        items={[
          { id: 1, title: "PETITION FOR MARRIED SON/DAUGHTER", imageSrc: "/petition.png" },
          { id: 2, title: "RENEW GREENCARD FILING SERVICES", imageSrc: "/greencard.png" },
          { id: 3, title: "ASYLUM FILING SERVICES", imageSrc: "/asylum.png" },
          { id: 4, title: "REMOVE CONDITIONS FILING SERVICES", imageSrc: "/conditions.png" },
        ]}
      />
      <Offering imageSrc="/offering.png" />
      <Feedback />
      <Footer />
    </main>
  );
}
