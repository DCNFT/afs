'use client';
import React from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  TextField,
} from '@radix-ui/themes';
import Link from 'next/link';

// - http://211.176.9.214:32020/createomate/edit
// - 조회 : http://211.176.9.214:32020/createomate/info?id=ca0626a7-b30f-47c9-b037-bc6bb50f12c7

const formId =
  process.env.NODE_ENV === 'production'
    ? '39fbbe0f-0dce-4bcf-abe0-0dc44c178c81'
    : '11e5795f-c56c-4615-bc47-530c670529a0';

const FORM_ID_ARRAY = [formId];
const Home = () => {
  return (
    <Flex justify={'center'} height={'100%'} align={'center'}>
      <Grid columns="3" gap="3" width="auto">
        {FORM_ID_ARRAY?.map((formId, i) => (
          <Card key={formId}>
            <Link href={`forms/${formId}`}>{formId}</Link>
          </Card>
        ))}
      </Grid>
      <Box p={'3'} className="border bg-slate-400">
        <Flex direction="column" gap="3">
          <Heading>Input Container</Heading>
          <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
            <Text>키워드를 입력하세요</Text>
            <TextField.Input radius="large" placeholder="" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Home;
