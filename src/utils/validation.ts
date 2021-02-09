const pathRegexp = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i',
);

export const validatePageField = (fieldName: string, value?: string) => {
  switch (fieldName) {
    case 'name': {
      return !value?.trim().length ? 'Required' : '';
    }
    case 'path': {
      if (!value?.trim().length) return 'Required';
      try {
        const test = `http://example.com/${value}`;
        const url = new URL(test);
        console.log(url.pathname);
      } catch (e) {
        console.log(e);
      }
    }
  }
  return '';
};
