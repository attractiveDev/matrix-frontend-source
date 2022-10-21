import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import useTheme from '../hook/useTheme'
import { styled } from "@mui/material/styles";
import Header from '../components/header';
import Footer from '../components/footer';
const ThemeProvider = styled('div')({
})

const RouterControl = () => {
  const [ theme, switchTheme ] = useTheme()
  return(
    <>
      <ThemeProvider data-theme={theme}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RouterControl;