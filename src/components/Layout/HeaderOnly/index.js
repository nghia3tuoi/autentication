import Header from "../components/Header/Header";


function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div>
                <div>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;