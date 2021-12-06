import Cover from "../components/Cover";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet'
function AutoMieten() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Auto Mieten</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Cover />
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AutoMieten;
