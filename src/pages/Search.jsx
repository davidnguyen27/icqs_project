import Header from '../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSearchProperties } from '../redux/actions/propertyAction';
import { Container } from '@mui/material';
import Property from '../components/Search/Property';
import NotFoundSearch from '../components/Search/NotFoundSearch';
import './Search.css';
const Search = () => {
  const search = useParams();
  const dispatch = useDispatch();
  const properties = useSelector((state) => state?.propertyReducer.propertyData);

  useEffect(() => {
    dispatch(getSearchProperties(search.param));
  }, [search]);

  return (
    <>
      <Header />
      <Container>
        {properties?.data?.property.length > 0 ? <Property properties={properties} /> : <NotFoundSearch />}
      </Container>
    </>
  );
};

export default Search;
