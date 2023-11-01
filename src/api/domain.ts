const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_DEFAULT_API_SERVER_URL
    : process.env.NEXT_PUBLIC_DEFAULT_API_SERVER_URL;

export { SERVER_URL };
