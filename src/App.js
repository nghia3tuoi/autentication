import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/Layout';
import { publicRoutes } from './routes'
import GlobalStyle from './components/GlobalStyles';
import { Fragment } from 'react';


function App() {
  
  return (
    // GlobalStyle dùng để sử dụng css module
    <GlobalStyle>
      {/* BrowerRouter dùng để định tuyến các tuyến đường */}
      <Router>
        <div className="App">
          {/* Routes chứa nhiều Route */}
          <Routes>
            {/* duyệt Route */}
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if(route.layout) {
                Layout = route.layout;
              }else if(route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </GlobalStyle>
  );
}

export default App;
