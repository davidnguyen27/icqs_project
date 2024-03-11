import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSearchProperties } from "../../redux/actions/propertyAction";
import { Container, Pagination, Stack } from "@mui/material";
import Property from "../../components/Search/Property";
import NotFoundSearch from "../../components/Search/NotFoundSearch";
import "./Search.css";
import Footer from "../../components/Footer/Footer";
const Search = () => {
  const search = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const properties = useSelector(
    (state) => state?.propertyReducer.propertyData
  );

  useEffect(() => {
    dispatch(getSearchProperties(search.param, page, 6));
  }, [search, page]);

  return (
    <>
      <Header />
      <Container>
        {properties?.data?.property.rows.length > 0 ? (
          <Property properties={properties} search={search} />
        ) : (
          <NotFoundSearch />
        )}
        {properties?.data?.property.rows.length > 0 && (
          <Stack
            spacing={2}
            style={{
              marginTop: "30px",
              marginBottom: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={Math.ceil(properties?.data?.property.count / 6)}
              variant="outlined"
              color="secondary"
              onClick={(e) => setPage(parseFloat(e.target.innerText) + 1)}
            />
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Search;
