import Layout from "../../layout/Gurst";
import Header from "./Header";
import SectionProducts from "./SectionProducts";
import SectionContact from "./SectionContact";
import SectionHero from "./SectionHero";
import Footer from "./Footer";

const Page = () => {
    return (
        <Layout>
            <Header />

            <SectionHero />

            <SectionContact />

            <SectionProducts />

            <Footer />
        </Layout>
    );
};

export default Page;
