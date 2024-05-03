
import { Helmet } from 'react-helmet-async';
import Banner from '../../../components/Banner/Banner';
import Contact from '../../../components/Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';

import Categories from '../Categories/Categories';
import CraftItem from '../CraftItems/CraftItem';
import Waiting from '../Waiting/Waiting';


const Home = () => {
   
    return (
        <>
           
            <div>
            <Helmet>
                <title>craftedCanvas || Home</title>

            </Helmet>
                <Banner />
                <Categories />
                <CraftItem></CraftItem>
                <AboutUs></AboutUs>
                <Waiting></Waiting>
                <Contact></Contact>

            </div>
        </>
    );
};

export default Home;
