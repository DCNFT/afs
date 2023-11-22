export const addObjectToFormData = (
  prefix: string,
  obj: any,
  formData: FormData,
): void => {
  for (const key in obj) {
    // console.log('key!!! =', key);
    if (obj.hasOwnProperty(key)) {
      //  console.log('[seo] ', Array.isArray(obj));
      let fullKey = prefix ? `${prefix}.${key}` : key;
      if (Array.isArray(obj)) {
        fullKey = prefix ? `${prefix}[${key}]` : key;
      }
      // console.log('fullKey= ', fullKey);
      // console.log('[seo] obj[key]=', typeof obj[key]);
      if (Array.isArray(obj[key])) {
        // If it is an array, recursively call addObjectToFormData for each element
        obj[key].forEach((item: any, index: number) => {
          addObjectToFormData(`${fullKey}[${index}]`, item, formData);
        });
      } else if (obj[key] instanceof File || obj[key] instanceof Blob) {
        // If it is a File, add to FormData with the file name
        formData.append(fullKey, obj[key], obj[key].name);
      } else if (typeof obj[key] === 'object') {
        // If it is an object, recursively call addObjectToFormData
        addObjectToFormData(fullKey, obj[key], formData);
      } else {
        // In other cases, add to FormData
        formData.append(fullKey, obj[key]);
      }
    }
  }
};
