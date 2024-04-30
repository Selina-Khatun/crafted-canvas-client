
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const Root = () => {
    const { theme } = useTheme();
    return (

        <div className='max-w-7xl mx-auto'>
            <div className={`${theme} app`}>
                <div className="card">
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                       
                    </div>
                    <Navbar></Navbar>
                    <Outlet >

                    </Outlet>
                    <Footer></Footer>
                   
                </div>


            </div>


        </div>


    );
};

export default Root;