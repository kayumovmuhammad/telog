let config = {
  botToken: null,
  chatId: null,
};

export const setConfig = (userConfig) => {
  config = { ...config, ...userConfig };
  console.log("config", config);
};

export const getConfig = () => config;