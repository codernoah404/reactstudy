import React from "react";
import MDBox from "../MDBox";
import Grid from "@mui/material/Grid";
import BookingCard from "examples/Cards/BookingCard";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <MDBox py={3}>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mt={3}>
              <BookingCard
                image={booking1}
                title="Cozy 5 Stars Apartment"
                description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
                price="$899/night"
                location="Barcelona, Spain"
                action={actionButtons}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mt={3}>
              <BookingCard
                image={booking2}
                title="Office Studio"
                description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.'
                price="$1.119/night"
                location="London, UK"
                action={actionButtons}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mt={3}>
              <BookingCard
                image={booking3}
                title="Beautiful Castle"
                description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.'
                price="$459/night"
                location="Milan, Italy"
                action={actionButtons}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
};

export default ListItem;
