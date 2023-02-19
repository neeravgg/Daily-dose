import {
  Card,
  CardContent,
  Typography,
  styled,
  Grid,
  CardActionArea,
} from "@mui/material";

const Component = styled(Card)`
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  margin-bottom: 20px;
`;

const Container = styled(CardContent)`
  display: flex;
  padding: 8px;
  padding-bottom: 4px !important;
  align-items: center;
  justify-content: center;
`;

const Image = styled("img")({
  height: 268,
  width: "88%",
  borderRadius: 5,
  objectFit: "cover",
});

const RightContainer = styled(Grid)(({ theme }) => ({
  margin: "5px 0px 0 0px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.between("sm", "lg")]: {
    padding: "0 5px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "5px 0",
  },
}));

const Title = styled(Typography)`
  font-weight: bold;
  color: #44444d;
  font-size: 22px;
  line-height: 27px;
`;



const Description = styled(Typography)`
  line-height: 22px;
  color: #44444d;
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;



const Publisher = styled(Typography)`
  font-size: 12px;
  margin-top: auto;
  margin-bottom: 10px;
  color: #fc0320;
`;

const Article = ({ article }) => {
  return (
    <Component>
      <CardActionArea href={article.link}>
        <Container>
          <Grid container>
            <Grid lg={5} md={5} sm={5} xs={12} item>
              <Image src={article.url} />
            </Grid>
            <RightContainer lg={7} md={7} sm={7} xs={12} item>
              <Title>{article.title}</Title>
             
              <Description>{article.description}</Description>
              <Publisher>Click to read more</Publisher>
            </RightContainer>
          </Grid>
        </Container>
      </CardActionArea>
    </Component>
  );
};

export default Article;
