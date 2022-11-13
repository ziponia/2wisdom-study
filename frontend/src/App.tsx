import React, { useEffect, useState } from "react";
import Api from "./api";

type PostType = {
  _id: string;
  content: string;
};

type FormValue = {
  content: string;
};

function App() {
  const [formValue, setFormValue] = useState<FormValue>({
    content: "",
  });

  const [posts, setPosts] = useState<PostType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { data } = await Api.post(`/post`, formValue);

    console.log("data", data);

    await fetchPosts();
    return false;
  };

  const fetchPosts = async () => {
    const { data } = await Api.get<PostType[]>(`/post`);

    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <fieldset>
        <legend>글 내용 저장</legend>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="글내용"
            name="content"
            value={formValue.content}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">저장하기</button>
        </form>
      </fieldset>

      <h2>글 목록들</h2>
      <ul>
        {posts.map((post) => {
          return <li key={post._id}>{post.content}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
