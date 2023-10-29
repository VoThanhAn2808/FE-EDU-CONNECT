import React from "react";
import { Box } from "@mui/material";
import LoginPage from "../../../pages/Login/LoginPage";


function LoginLayout({ childrens }) {
    return ( 
        <Box>
            <LoginPage/>
            {childrens}
        </Box>
     );
}

export default LoginLayout;
