
import Banner from '../../../components/Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';

import Categories from '../Categories/Categories';
import CraftItem from '../CraftItems/CraftItem';


const Home = () => {
    // const { theme } = useTheme();

    return (
        <>
            {/* <div className={`${theme} app`}>
                <div className="card">
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <ToggleBtn />
                    </div>
                    <h4>Dark Mode is {theme === 'dark' ? 'On' : 'Off'}</h4>
                </div>
            </div> */}
            <div>
                <Banner />
                <Categories />
                <CraftItem></CraftItem>
                <AboutUs></AboutUs>

            </div>
        </>
    );
};

export default Home;
