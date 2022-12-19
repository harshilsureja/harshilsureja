// import PropTypes from 'prop-types';
import React from 'react';
// import {connect} from 'react-redux';
import { Badge, Box, Flex, Title } from '@mantine/core';

export const OtherSkills = ({ otherSkills }: any) => {
  return (
    <Box>
      <Title order={3} weight={100} align={'center'} m={16}>
        Other skills
      </Title>
      <Flex gap={16}>
        {/* {otherSkills.map((ele: string) => (
          <Badge size='lg' key={ele}>
            {ele}
          </Badge>
        ))} */}
      </Flex>
    </Box>
  );
};

export default OtherSkills;