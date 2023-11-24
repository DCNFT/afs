const SERVER_URL =
  process.env.NODE_ENV === 'production' && typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_DEFAULT_API_SERVER_URL_USE_SERVER
    : process.env.NEXT_PUBLIC_DEFAULT_API_SERVER_URL;

export { SERVER_URL };
