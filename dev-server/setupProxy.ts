const devProxy: { [key: string]: {} } = {
  '/api': {
    target: 'http://localhost:3033',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
  },
};

export default devProxy;
