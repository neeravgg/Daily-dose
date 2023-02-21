import { useState, useEffect } from "react";
import data from "../service/data";
import InfoHeader from "./InfoHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import { styled, Box } from "@mui/material";
//components
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const dailyNews = async () => {
      // const response = await getNews(page);
      // setNews([...new Set([...news, ...response.data])]);
      setNews(data);
    };

    dailyNews();
  }, [page]);

  const Container = styled(Box)(({ theme }) => ({
    width: "59%",
    margin: "40px auto 0 auto",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  }));
  return (
    <Container>
      <InfoHeader />
      <InfiniteScroll
        dataLength={news.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
      >
        {news.map((article) => (
          <Article article={article} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Articles;
