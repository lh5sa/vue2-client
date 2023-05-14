const { VUE_APP_BASE_API_URL, VUE_APP_AVATAR_UPLOAD_URL, VUE_APP_STATIC_HOST_URL } = import.meta.env;

const config = {
  // 接口地址
  baseURL: VUE_APP_BASE_API_URL || "",

  // 文件上传地址
  uploadURL: VUE_APP_AVATAR_UPLOAD_URL || "",

  // 静态文件访问地址
  staticURL: VUE_APP_STATIC_HOST_URL || "",
};

export default Object.freeze(config);
