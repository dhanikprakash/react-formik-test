import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { ContactDetailsSection } from "./ContactDetailsSection";
import { exampleContactDetails } from "./ExampleData";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 500,
  lineHeight: "60px",
}));
const lightTheme = createTheme({ palette: { mode: "light" } });
export const ContactDetails: React.FC = () => {
  return (
    <Grid container spacing={1} alignItems="center" justifyContent="center">
      <Grid item xs={6} key={1}>
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr" },
              gap: 2,
            }}
          >
            <Item key={8} elevation={8}>
              <ContactDetailsSection contactDetails={exampleContactDetails} />
            </Item>
          </Box>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
