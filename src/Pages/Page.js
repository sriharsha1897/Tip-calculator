import Tipcalculator from "../components/Tipcalculator/Tipcalculator";
import Footer from "./Footer";
import Header from "./Header";
import './Page.css';

const Page = () => (
    <div className="page">
      <Header />
      <Tipcalculator />
      <Footer />
    </div>
);

export default Page;
