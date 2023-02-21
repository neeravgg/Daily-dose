import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
      <Link color='inherit' href='https://dd-minor-prj.netlify.app/'>
        Daily Dose
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <InfoRoundedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            About us
          </Typography>
          <Box
            component='span'
            sx={{ mt: 3, borderRadius: "16px", boxShadow: 1, padding: 5 }}
          >
            <Typography>
              Daily Dose is an Web app that summarizes news articles in 60 words
              and covers a wide-range of topics, including tech and business.
              This Web app is possible because of our two founders: Neerav garg
              and Bal Krishan Tripathi. "The way to get started is to quit
              talking and begin doing."
            </Typography>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
