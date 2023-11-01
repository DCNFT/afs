export type RetouchRequestParams = {
  image_file?: FormData;
  target_width?: number;
  target_height?: number;
  has_scale?: boolean;
  has_animation?: boolean;
  data?: FormData;
};
