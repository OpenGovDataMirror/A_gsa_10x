import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "app/ContentModule";
import { Grid } from "components/Grid";
import Loading from "components/Loading";
import FourOhFour from "routes/FourOhFour";
import Head from "routes/Head";
import Layout from "features/Layout";
import PostList from "features/Layout/templates/PostList"
import useScrollToTop from "utils/useScrollToTop";

const Page = ({ name }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const pageName = name ? name : params.name;
  const page = useSelector((state) => state.content.page);
  useScrollToTop();
  useEffect(() => {
    dispatch(getPage({ name: pageName }));
  }, [dispatch, pageName]);
  const { pending, data, error } = page;
  if (pending) {
    return (
      <Grid>
        <Head title="Loading..." />
        <div className="margin-y-9 margin-x-auto">
          <Loading isLoading={true}>
            <span />
          </Loading>
        </div>
      </Grid>
    );
  }
  if (error) {
    return <FourOhFour pathname={pageName} />;
  }
  return (
    <div className={`TxContent Tx__${pageName}`}>
      <div className="usa-app__bg">
        <Head title={data.title} />
        <div className={`Tx__${data.name}-content`}>
          <Layout items={data.sections} />
          {(pageName === "news-updates") &&
            <PostList />
          }
        </div>
      </div>
    </div>
  );
};

export default Page;
