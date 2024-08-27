import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Faq from '../FAQ/Faq';
import Reviewer from '../Reviewer/Reviewer';
import MostReview from './MostReview/MostReview';
import Team from './Team/Team';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <MostReview></MostReview>
            <Faq></Faq>
            <Team></Team>
            <Reviewer></Reviewer>
            <Contact></Contact>

        </div>
    );
};

export default Home;