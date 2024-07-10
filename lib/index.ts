import { BaseLinkerResponse, FetchParams } from "../types";

export async function baseLinkerFetch(
  apiToken: string,
  params: FetchParams
): Promise<BaseLinkerResponse> {
  const response = await fetch("https://api.baselinker.com/connector.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-BLToken": apiToken,
    },
    body: new URLSearchParams({
      method: params.method,
      parameters: JSON.stringify(params.parameters || {}),
    }).toString(),
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: BaseLinkerResponse = await response.json();
  return data;
}
