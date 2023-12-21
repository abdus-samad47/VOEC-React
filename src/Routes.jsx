import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const WishListPage = React.lazy(() => import("pages/WishListPage"));
const Footer = React.lazy(() => import("pages/Footer"));
const CustomerSupportChatPage = React.lazy(
  () => import("pages/CustomerSupportChatPage"),
);
const CustomerSupportPage = React.lazy(
  () => import("pages/CustomerSupportPage"),
);
const CheckoutPaymentPage = React.lazy(
  () => import("pages/CheckoutPaymentPage"),
);
const CheckoutShippingPage = React.lazy(
  () => import("pages/CheckoutShippingPage"),
);
const CheckoutAddressPage = React.lazy(
  () => import("pages/CheckoutAddressPage"),
);
const MyCartPage = React.lazy(() => import("pages/MyCartPage"));
const SingleProductPage = React.lazy(() => import("pages/SingleProductPage"));
const CustomerListPage = React.lazy(() => import("pages/CustomerListPage"));
const ProductListPage = React.lazy(() => import("pages/ProductListPage"));
const DashboardOverviewPage = React.lazy(
  () => import("pages/DashboardOverviewPage"),
);
const ForgotPasswordPageFour = React.lazy(
  () => import("pages/ForgotPasswordPageFour"),
);
const ForgotPasswordPageOne = React.lazy(
  () => import("pages/ForgotPasswordPageOne"),
);
const SignupPage = React.lazy(() => import("pages/SignupPage"));
const ForgotPasswordPageThree = React.lazy(
  () => import("pages/ForgotPasswordPageThree"),
);
const ForgotPasswordPageTwo = React.lazy(
  () => import("pages/ForgotPasswordPageTwo"),
);
const SalesDetailsPage = React.lazy(() => import("pages/SalesDetailsPage"));
const LoginorSignupPage = React.lazy(() => import("pages/LoginorSignupPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginorSignupPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/salesdetailspage" element={<SalesDetailsPage />} />
          <Route
            path="/forgotpasswordpagetwo"
            element={<ForgotPasswordPageTwo />}
          />
          <Route
            path="/forgotpasswordpagethree"
            element={<ForgotPasswordPageThree />}
          />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route
            path="/forgotpasswordpageone"
            element={<ForgotPasswordPageOne />}
          />
          <Route
            path="/forgotpasswordpagefour"
            element={<ForgotPasswordPageFour />}
          />
          <Route
            path="/dashboardoverviewpage"
            element={<DashboardOverviewPage />}
          />
          <Route path="/productlistpage" element={<ProductListPage />} />
          <Route path="/customerlistpage" element={<CustomerListPage />} />
          <Route path="/singleproductpage" element={<SingleProductPage />} />
          <Route path="/mycartpage" element={<MyCartPage />} />
          <Route
            path="/checkoutaddresspage"
            element={<CheckoutAddressPage />}
          />
          <Route
            path="/checkoutshippingpage"
            element={<CheckoutShippingPage />}
          />
          <Route
            path="/checkoutpaymentpage"
            element={<CheckoutPaymentPage />}
          />
          <Route
            path="/customersupportpage"
            element={<CustomerSupportPage />}
          />
          <Route
            path="/customersupportchatpage"
            element={<CustomerSupportChatPage />}
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/wishlistpage" element={<WishListPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
