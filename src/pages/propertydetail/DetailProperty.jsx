import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./DetailProperty.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProperties } from "../../redux/actions/propertyAction";
import Footer from "../../components/Footer/Footer";
import IntroDetailProperty from "../../components/detailproperty/IntroDetailProperty";

const DetailProperty = () => {
  const idProperty = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const properties = useSelector(
    (state) => state?.propertyReducer.propertyData
  );
  useEffect(() => {
    dispatch(getSearchProperties(""));
  }, [idProperty.id]);
  const property = properties?.data?.property.rows.filter(
    (item) => item.id === idProperty.id
  )[0];

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">{property.name}</Typography>
        <IntroDetailProperty property={property} idProperty={idProperty} />
      </Container>
      <Footer />
    </>
  );
};

export default DetailProperty;
