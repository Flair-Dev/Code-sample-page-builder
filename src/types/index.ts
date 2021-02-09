export type TBasePage = {
  name: string;
  path: string;
  category?: string;
};

export type TPage = TBasePage & {
  id: string;
};

export type TPages = TPage[];
