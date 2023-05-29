import { Fragment, ReactNode } from "react";
import Header from "./Header";

type Props = { children: ReactNode };

function Layout({ children }:Props) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default Layout;
