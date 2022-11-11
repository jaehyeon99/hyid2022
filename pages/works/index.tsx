import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { CategoryWithWorks } from "@pages/api/category";
import type { NextPage } from "next";
import MobileWorks from "@components/mobile/works";
import Index from "@components/desktop/works";

const WorksPage: NextPage = () => {
  const getCategory = () => {
    return Axios.get("/api/category").then((res) => res.data);
  };
  const { data, isLoading } = useQuery<CategoryWithWorks[]>(
    ["category"],
    getCategory
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      {/*<MobileWorks categories={data!} />*/}
      <Index categories={data!} />
    </div>
  );
};

export default WorksPage;
