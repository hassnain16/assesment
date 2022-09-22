import React from "react";
import Brands from "../../pages/brands/Brands";
import Baner from "../../pages/baner/Baner";
import Header from "./header/Header";
import Agents from "../../pages/agents/Agents";
import Other from "../../pages/other/Other";
import Services from "../../pages/services/Services";
import CustomerSupport from "../../pages/customerSupport/CustomerSupport";
import Customer from "../../pages/cutomer/Customer";
import CustomerForm from "../../pages/customerForm/CustomerForm";
function Layout() {
  return (
    <>
      <Header />
      <Baner />
      <Brands />
      <Agents />
      <Other />
      <Services />
      <CustomerSupport />
      <Customer />
      <CustomerForm />
    </>
  );
}
// https://xd.adobe.com/view/13fa2e07-839e-4e57-875b-3a0b4a3b9812-46a9/specs/
export default Layout;
