import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;