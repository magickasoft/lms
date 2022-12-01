import SC from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import React from 'react';

const HelperText = SC(FormHelperText)``;

const Label = SC(InputLabel)``;

const InputField = SC(Input)`
  &:after, &:before {
    content: unset;
  }

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  height: 36px;

  background: url(images/icons/search.svg) no-repeat scroll 19px 11px;
  padding-left:42px;
  padding-right: 12px;
`;

type ContainerProps = {
  focused?: boolean;
};

const Container = SC(FormControl)<ContainerProps>`
  border-radius: 1000px;
  background: #F5F5F5;
  width: 100%;
`;

export const InputSearch = ({placeholder, helperText, focused, disabled, error, required, variant = 'standard', ...other}) => {
  const formProps = {
    disabled,
    error,
    required,
    variant,
  };
  return (
    <>
      {/*// @ts-ignore*/}
      <Container focused={focused} {...formProps}>
        <InputField type="search" placeholder={placeholder ?? 'Search'} {...other} />
        {/* {helperText && (
          <HelperText id="helper-text" focused={focused}>
            {helperText}
          </HelperText>
        )} */}
      </Container>
    </>
  );
};
