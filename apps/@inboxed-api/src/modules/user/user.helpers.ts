import { FindUserParams } from '@inboxed/common';

export const mapUserParamsToQuery = (findUserParams: FindUserParams) => {
  const queryParams: Array<{ [key: string]: unknown }> = [];

  Object.keys(findUserParams).forEach((key) => {
    if (findUserParams[key]) {
      queryParams.push({ [key]: findUserParams[key] });
    }
  });

  return queryParams;
};
