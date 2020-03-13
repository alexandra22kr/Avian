import React from "react";
import { ThemeProvider, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./theme";
import SearchInput from "./components/SearchInput/SearchInput";
import ImagesList from "./components/ImagesList/ImagesList";
import HistoryModal from './components/HistoryModal/HistoryModal'

const useStyles = makeStyles(() => ({
  root: {
    padding: "5rem 3rem"
  }
}));

function App() {
  const classes = useStyles(theme => ({
    root: {
      
    }
  }));

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <SearchInput />
        <HistoryModal />
        <ImagesList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
