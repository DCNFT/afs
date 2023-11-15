export const PURPOSE = 'purpose';
export const SELECT = 'select';
export const KEYWORD = 'keyword';
export const UPLOAD = 'upload';
export const PREVIEW = 'preview';

export const templateRoutes = {
  purpose: {
    title: '광고목적',
    description: '광고를 통해 얻고자 하는 목적을 선택해주세요.',
    routePath: '/template/purpose',
  },
  select: {
    title: '템플릿 선택',
    description: '우리 가게/브랜드 홍보에 잘 어울리는 템플릿을 선택해주세요',
    routePath: '/template/select',
  },
  keyword: {
    title: '정보 입력',
    description: 'AI가 최적의 광고 구성을 하기 위해 참고할 정보를 알려주세요',
    routePath: '/template/keyword',
  },
  upload: {
    title: '미디어 업로드',
    description: '광고에 사용할 이미지와 영상을 업로드해주세요.',
    routePath: '/template/upload',
  },
  preview: {
    title: '영상 미리보기',
    description: '광고에 사용할 영상을 미리보기 해주세요.',
    routePath: '/template/preview',
  },
};
