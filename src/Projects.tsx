import React from "react";
import "./css/main.css";
import { useQuery, gql } from "@apollo/client";

const getRepos = gql`
  {
    user(login: "gnaaruag") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
              description
              languages(first: 4) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
              repositoryTopics(first: 6) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface PinnedItem {
  node: {
    id: string;
    name: string;
    url: string;
    description: string;
    languages: {
      edges: {
        node: {
          color: string;
          name: string;
        };
      }[];
    };
    repositoryTopics: {
      edges: {
        node: {
          topic: {
            name: string;
          };
        };
      }[];
    };
  };
}

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery(getRepos);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pinnedItems: PinnedItem[] = data.user.pinnedItems.edges;

  return (
    <div className="isans mb-4 card section" id="experience">
      <h2 className="font-bold text-center heading px-2 mb-8">Side Projects</h2>
      <div className="flex flex-col gap-4 mx-2 mt-4 mb-4">
        {pinnedItems.map(
          ({
            node: {
              id,
              name,
              url,
              description,
              languages,
              repositoryTopics,
            },
          }) => (
            <div
              key={id}
              className="p-4 item-card rounded-lg leading-none flex flex-col justify-start items-left space-x-6 component"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <div className="flex-1">
                <h3 className="text-xl mt-2 mb-1">{name}</h3>
                <p className="text-gray-600 mb-2">{description}</p>
                <div className="flex gap-4 flex-wrap my-2">
                  {languages.edges
                    .slice(0)
                    .reverse()
                    .map(({ node }) => (
                      <div
                        key={node.name}
                        className="flex items-center text-gray-500 text-sm"
                      >
                        <div
                          className="rounded-full h-3 w-3 mr-1"
                          style={{ backgroundColor: node.color }}
                        />
                        <span>{node.name}</span>
                      </div>
                    ))}
                </div>
                <div className="tags flex gap-2 flex-wrap">
                  {repositoryTopics.edges.map(
                    ({
                      node: {
                        topic: { name },
                      },
                    }) => (
                      <span
                        key={name}
                        className="item-card-2 p-1 font-sm my-2 rounded-md"
                      >
                        {name}
                      </span>
                    )
                  )}
                </div>
                <a
                  href={url}
                  className="pt-2 block text-indigo-400 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
