import Box from '@mui/material/Box';
import {Formik} from 'formik';
import React from 'react';

import {contact} from '../../api';
import {event} from '../../helpers/gtag';
import {reachGoal} from '../../helpers/ym';
import {InputSearch} from '../inputSearch';
import {searchSchema} from './search.schema';

export const SearchForm = props => {
  const [loading, setLoading] = React.useState(false);

  const handleSend = React.useCallback(async (search = '') => {
    setLoading(true);
    try {
      await contact({search});
      const data: any = {action: 'submit_form', category: 'contact_search', label: search};
      event(data);
      reachGoal('contact_search');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      validationSchema={searchSchema}
      onSubmit={({search}) => {
        handleSend(search);
      }}
      {...props}
    >
      {({handleSubmit, handleChange, handleBlur, isValid, dirty, touched, errors, values: {search}}) => {
        const toSend = () => {
          handleSend(search);
        };
        return (
          <form onSubmit={handleSubmit}>
            <Box mb={3} mt={3}>
              <Box>
                {/*// @ts-ignore*/}
                <InputSearch
                  placeholder="Search for courses"
                  name="search"
                  error={!!touched.search && !!errors.search}
                  helperText={touched.search ? errors.search : undefined}
                  value={search}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly={false}
                />
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};
