import Banner from '../Banner/Banner';
import MostReview from './MostReview/MostReview';
import Team from './Team/Team';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <MostReview></MostReview>
            <Team></Team>

        </div>
    );
};

export default Home;