'use client';

import TemplateBanner from '../components/TemplateBanner';
import { KEYWORD, UPLOAD, templateRoutes } from '@/constants/routes';
import { FieldErrors, useForm } from 'react-hook-form';
import KeywordInputWrapper from './KeywordInputWrapper';
import useRouting from '@/hooks/useRouting';
import { Button } from '@radix-ui/themes';
import useTemplateStore from '@/store/useTemplateStore';

export type FormValues = {
  product: string;
  brand: string;
  promotion: string;
  keywords: string;
};

const TemplateKeywordInputPage = () => {
  const handleRouting = useRouting({ path: templateRoutes[UPLOAD]?.routePath });
  const templateData = useTemplateStore((state) => state.templateData);
  const setStoreInfo = useTemplateStore((state) => state.setStoreInfo);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    console.log('errors', errors);

    const storeInfo = {
      name: {
        name: 'STORE_NAME',
        value: data.brand as string,
      },
      type: data.product as string,
      description: data.promotion as string,
      keyword: data.keywords as string,
    };

    console.log('storeInfo ', storeInfo);
    // const template = {
    //   ...templateData,
    //   info: {
    //     ...templateData.info,
    //     store_info: storeInfo,
    //   },
    // };
    setStoreInfo(storeInfo);
    //handleRouting();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log('실패');
    console.log(errors);
  };
  console.log('templateData ', templateData);

  return (
    <div className="min-w-fit p-4">
      <TemplateBanner
        title={templateRoutes[KEYWORD]?.title}
        description={templateRoutes[KEYWORD]?.description}
      />
      <div className="flex flex-col p-5">
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <KeywordInputWrapper
            id="brand"
            name="brand"
            label="상호 또는 브랜드 이름을 알려주세요 (필수)"
            placeholder="예시: 우리동네화로"
            maxLength={30}
            setValue={setValue}
            register={register}
            handleSubmit={handleSubmit}
            validationRules={{
              required: true,
              maxLength: 30,
            }}
          />

          <KeywordInputWrapper
            id="product"
            name="product"
            label="주력 제품 또는 서비스를 알려주세요 (필수)"
            placeholder="예시: 소고기, 돼지고기 구이 전문점"
            maxLength={30}
            setValue={setValue}
            register={register}
            handleSubmit={handleSubmit}
            validationRules={{
              required: true,
              maxLength: 30,
            }}
          />

          <KeywordInputWrapper
            id="promotion"
            name="promotion"
            label="홍보하고 싶은 특징을 담아서 간단하게 소개해주세요 (필수)"
            placeholder="예시: 한우 100%, 한돈 100%, 신선한 재료, 매일 아침 만든 반찬 제공"
            maxLength={50}
            setValue={setValue}
            register={register}
            handleSubmit={handleSubmit}
            validationRules={{
              required: true,
              maxLength: 50,
            }}
          />

          <KeywordInputWrapper
            id="keywords"
            name="keywords"
            label="강조하고 싶은 내용을 키워드 형식으로 알려주세요 (선택)"
            placeholder="예시: 가족, 연인, 회식 모두 만족하는 장소"
            maxLength={30}
            setValue={setValue}
            register={register}
            handleSubmit={handleSubmit}
            validationRules={{
              required: false,
              maxLength: 30,
            }}
          />
          <Button className="bg-violet-500" type="submit">
            다음
          </Button>
        </form>
        {/* 
        <NextButton path={templateRoutes[UPLOAD]?.routePath} /> */}
      </div>
    </div>
  );
};

export default TemplateKeywordInputPage;
