"use client";

import { fetchGithubRepos } from "@/lib/api/github";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { FiExternalLink, FiGlobe } from "react-icons/fi";

export default function Projects() {
  const [data, setdata] = React.useState<any>([]);

  React.useEffect(() => {
    fetchGithubRepos().then((res) => setdata(res));
  });

  return (
    <div className="flex flex-col w-full my-8">
      <div className="text-xl font-bold my-4">Projects</div>
      <div className="w-full grid grid-cols-2 gap-4">
        {data.map((repo: any) => {
          return (
            <Card className="flex flex-col justity-between">
              <CardHeader>
                <div className="flex justify-between">
                  <a href={repo.clone_url} target="_blank">
                    <CardTitle className="text-base hover:underline">
                      {repo.name}
                    </CardTitle>
                  </a>
                  <div className="flex flex-row gap-4">
                    <a href={repo.html_url} target="_blank">
                      <FiExternalLink />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank">
                        <FiGlobe />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="line-clamp-2 text-sm font-light">
                  {repo.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
