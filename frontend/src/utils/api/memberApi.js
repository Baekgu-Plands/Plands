import client from "../client";

export const getMemberDetail = async (accessToken) => {
  const response = await client.get(`/member`, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });

  return response;
};

export const modifyMember = async (accessToken, data) => {
  const response = await client.put(`/member`, data, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });

  return response;
};

export const findId = async (emailAddress) => {
  const response = await client.post(`/member/id`, emailAddress);
  return response;
};

export const getMemberList = async (accessToken, offset, size) => {
  const response = await client.get(
    `/member/list?offset=${offset}&size=${size}`,
    {
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }
  );

  return response;
};

export const modifyPassword = async (accessToken, data) => {
  const response = await client.post(`/baekgu/member/newpwd`, data, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });

  return response;
};