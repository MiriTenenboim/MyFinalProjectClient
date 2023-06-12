import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React Router
// import { Provider } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './User/Js/UserLogin';
import CompanyLogin from './Company/Js/CompanyLogin';
import UserRegistration from './User/Js/UserRegistration';
import CompanyRegistration from './Company/Js/CompanyRegistration'
import UserMenuPage from './User/Js/UserMenuPage';
import CompanyMenuPage from './Company/Js/CompanyMenuPage';
import UpdateDetailsUser from './User/Js/UpdateDetailsUser';
import UpdateUser from './User/Js/UpdateUser';
import UpdateComapny from './Company/Js/UpdateComapny';
import ChooseLocationUser from './User/Js/ChooseLocationUser';
import AddUserPoint from './User/Js/AddUserPoint';
import ShowPointsUser from './User/Js/ShowPointsUser';
import ShowRealizedPointsUser from './User/Js/ShowRealizedPointsUser';
import StartSport from './User/Js/StartSport';
import SportActivityDetails from './User/Js/SportActivityDetails';
import CreateARoute from './User/Js/CreateARoute';
import ShowRoute from './User/Js/ShowRoute';
import ChooseLocationCompany from './Company/Js/ChooseLocationCompany';
import AddCompanyPoint from './Company/Js/AddCompanyPoint';
import UpdateDetailsCompany from './Company/Js/UpdateDetailsCompany';
import CompanyPointDetails from './Company/Js/CompanyPointDetails';
import ShowPointsCompany from './Company/Js/ShowPointsCompany';

// import { BrowserRouter } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}></Route>
        <Route path='/UserLogin' element={<UserLogin />}></Route>
        <Route path='/CompanyLogin' element={<CompanyLogin />}></Route>
        <Route path='/UserRegistration' element={<UserRegistration />}></Route>
        <Route path='/CompanyRegistration' element={<CompanyRegistration />}></Route>
        <Route path='/UserRegistration/UserMenuPage' element={<UserMenuPage />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage' element={<CompanyMenuPage />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage/UpdateDetailsCompany' element={<UpdateDetailsCompany />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage/UpdateDetailsCompany/UpdateComapny' element={<UpdateComapny />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage/CompanyPointDetails' element={<CompanyPointDetails />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage/CompanyPointDetails/ChooseLocationCompany' element={<ChooseLocationCompany />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage/ChooseLocationCompany/AddCompanyPoint' element={<AddCompanyPoint />}></Route>
        <Route path='/CompanyRegistration/CompanyMenuPage/ShowPointsCompany' element={<ShowPointsCompany />}></Route>
        <Route path='/UserRegistration/UserMenuPage/UpdateDetailsUser' element={<UpdateDetailsUser />}></Route>
        <Route path='/UserRegistration/UserMenuPage/UpdateDetailsUser/UpdateUser' element={<UpdateUser />}></Route>
        <Route path='/UserRegistration/UserMenuPage/ChooseLocationUser' element={<ChooseLocationUser />}></Route>
        <Route path='/UserRegistration/UserMenuPage/ShowPointsUser' element={<ShowPointsUser />}></Route>
        <Route path='/UserRegistration/UserMenuPage/ShowRealizedPointsUser' element={<ShowRealizedPointsUser />}></Route>
        <Route path='/UserRegistration/UserMenuPage/StartSport' element={<StartSport />}></Route>
        <Route path='/UserRegistration/UserMenuPage/StartSport/SportActivityDetails' element={<SportActivityDetails />}></Route>
        <Route path='/UserRegistration/UserMenuPage/CreateARoute' element={<CreateARoute />}></Route>
        <Route path='/UserRegistration/UserMenuPage/CreateARoute/ShowRoute' element={<ShowRoute />}></Route>
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
