export type CommonResponseBase<T> = {
  status: number;
  error?: string;
  message?: string;
  data?: T;
};

export type PaginationResponseBase<T> = CommonResponseBase<{
  items: T[];
  total: number;
}>;
