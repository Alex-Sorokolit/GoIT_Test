import axios from "axios";

export async function getUsers(controller) {
  try {
    const url = "https://63d3d5b3a93a149755b3fa18.mockapi.io/users";
    // console.log("controller: ", controller);
    const response = axios.get(url, { signal: controller.signal });

    return response;
  } catch (error) {
    console.log(error.message);
  }
}
