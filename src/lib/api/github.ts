import { createContext, useContext } from "react";
import axios, { AxiosError } from "axios";
import dotenv from "dotenv";
import { RemoveTheseRepos } from "../filter";

dotenv.config();

export async function fetchAccessToken() {
  return process.env.GITHUB_ACCESS_TOKEN;
}

const NEXT_PUBLIC_GITHUB_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

const GithubContext = createContext("github");

export const useGithubContext = () => useContext(GithubContext);

export async function fetchGithubData() {
  try {
    const response = await axios.get("https://api.github.com/users/amaan8429", {
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching GitHub data:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

export async function fetchGithubRepos() {
  try {
    console.log(
      NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
      "NEXT_PUBLIC_GITHUB_ACCESS_TOKEN"
    );
    const response = await axios.get(
      "https://api.github.com/users/amaan8429/repos",
      {
        headers: {
          Authorization: `Bearer ${NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    const filteredData = response.data.filter(
      (repo: any) => !RemoveTheseRepos.includes(repo.name)
    );
    return filteredData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching GitHub repositories:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

export async function LastUpdated() {
  const response = await axios.get(
    "https://api.github.com/repos/amaan8429/portfolio",
    {
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  const updatedAt = response.data.updated_at;
  const formattedDate = new Date(updatedAt).toLocaleString().split(",")[0];
  return formattedDate;
}
