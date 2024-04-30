
import Banner from '../../../components/Banner/Banner';

import Categories from '../Categories/Categories';


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
                <Categories  />
            </div>
        </>
    );
};

export default Home;
