'use client';

import React from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  TextField,
} from '@radix-ui/themes';
import Link from 'next/link';
import { templateList } from '@/api/internal/creatomate/http';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

// - http://211.176.9.214:32020/createomate/edit
// - 조회 : http://211.176.9.214:32020/createomate/info?id=ca0626a7-b30f-47c9-b037-bc6bb50f12c7

const formId =
  process.env.NODE_ENV === 'production'
    ? '11e5795f-c56c-4615-bc47-530c670529a0' //'39fbbe0f-0dce-4bcf-abe0-0dc44c178c81'
    : '11e5795f-c56c-4615-bc47-530c670529a0';

const FORM_ID_ARRAY = [formId];
const Home = () => {
  // const { data, error, isLoading } = useQuery(['templateList'], templateList);

  return (
    <Flex justify={'center'} height={'100%'} align={'center'}>
      <Grid columns="3" gap="3" width="auto">
        <Card key={formId}>
          <Link href={'/labs'}>
            <Heading>이미지 업스케일링, 애니메이션 </Heading>
          </Link>
        </Card>
        <Card key={formId}>
          <Link href={'/template'}>
            <Heading>UI 페이지 FLOW </Heading>
          </Link>
        </Card>

        {/* {data?.data?.map((templateInfo: any, i: number) => (
          <Card key={formId}>
            <Heading>{templateInfo.name}</Heading>
            <Link href={`forms/${templateInfo.id}`}>
              id : {templateInfo.id}
            </Link>
            <Flex direction={'column'}>
              <Text>
                created_at :{' '}
                {moment(templateInfo?.created_at).format('YYYY-MM-DD')}
              </Text>
              <Text>
                updated_at :{' '}
                {moment(templateInfo?.updated_at).format('YYYY-MM-DD')}
              </Text>
              {templateInfo?.tags?.map((tag: string) => {
                return (
                  <Box key={tag}>
                    <Text>{tag}</Text>
                  </Box>
                );
              })}
            </Flex>
          </Card>
        ))} */}
      </Grid>
      {/* <Box p={'3'} className="border bg-slate-400">
        <Flex direction="column" gap="3">
          <Heading>Input Container</Heading>
          <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
            <Text>키워드를 입력하세요</Text>
            <TextField.Input radius="large" placeholder="" />
          </Flex>
        </Flex>
      </Box> */}
    </Flex>
  );
};
export default Home;
