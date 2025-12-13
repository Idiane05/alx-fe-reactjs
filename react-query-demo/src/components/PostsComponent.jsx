                            import { useQuery } from "@tanstack/react-query";
                            import axios from "axios";

                            // Function to fetch posts
                            const fetchPosts = async () => {
                              const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                                return res.data;
                                };

                                export default function PostsComponent() {
                                  const {
                                      data,
                                          isError,
                                              error,
                                                  isLoading,
                                                      refetch,
                                                        } = useQuery({
                                                            queryKey: ["posts"],
                                                                queryFn: fetchPosts,

                                                                    // ✅ React Query configuration options
                                                                        cacheTime: 1000 * 60 * 5, // 5 minutes
                                                                            staleTime: 1000 * 30, // 30 seconds
                                                                                refetchOnWindowFocus: false, // don't refetch when window regains focus
                                                                                    keepPreviousData: true, // keep old data while fetching new
                                                                                      });

                                                                                        if (isLoading) return <p>Loading...</p>;
                                                                                          if (isError) return <p>Error fetching posts: {error.message}</p>;

                                                                                            return (
                                                                                                <div>
                                                                                                      <button
                                                                                                              onClick={() => refetch()}
                                                                                                                      className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                                                                                                                            >
                                                                                                                                    Refresh Posts
                                                                                                                                          </button>

                                                                                                                                                <ul className="space-y-2">
                                                                                                                                                        {data.slice(0, 10).map((post) => (
                                                                                                                                                                  <li key={post.id} className="border p-2 rounded">
                                                                                                                                                                              <strong>{post.title}</strong>
                                                                                                                                                                                          <p>{post.body}</p>
                                                                                                                                                                                                    </li>
                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                  </ul>
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        