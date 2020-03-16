import React from "react";
import { ThemeProvider, Container, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import theme from "./theme";
import configureStore from "./store/configureStore";
import SearchInput from "./components/SearchInput/SearchInput";
import ImagesList from "./components/ImagesList/ImagesList";
import HistoryModal from "./components/HistoryModal/HistoryModal";

const store = configureStore();

const useStyles = makeStyles(() => ({
  root: {
    padding: "5rem 3rem",
    display: "grid",
    flexDirection: "column",
    alignItems: "center"
  },
  toolbar: {
    justifyContent: "flex-end"
  }
}));

function App() {
  const classes = useStyles(theme => ({
    root: {}
  }));

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <HistoryModal />
          </Toolbar>
        </AppBar>
        <Container className={classes.root}>
          <SearchInput />
          <ImagesList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
