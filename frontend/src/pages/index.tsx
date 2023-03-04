import { GetServerSideProps } from "next";
import { ReactElement } from "react"
import GeneralLayout from "../../layout/General"

function HomePage() {
  return <div>Welcome to.jsfdsdf!</div>
}

HomePage.getLayout = (page: ReactElement) => {
  return <GeneralLayout>{page}</GeneralLayout>;
}

export default HomePage