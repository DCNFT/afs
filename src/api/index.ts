import Axios from 'axios';

// front, backend 간 쿠키공유

//import { cacheAdapterEnhancer } from 'axios-extensions';
//axios 정의
const axios = Axios.create({
  baseURL: 'http://211.176.9.214:32020',
});

export default axios;
