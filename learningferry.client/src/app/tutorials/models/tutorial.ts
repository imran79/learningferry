export interface Tutorial {
  id: string;
  createdat: Date;
  lastupdatedat: Date;
  title: string;
  isdraft: boolean;
  ispublish: boolean;
  publishdate: Date;
  isarchive: boolean;
  content: string;
  author: string;
  completiontime: number;
  description: string;
  imagelink: string;
}
