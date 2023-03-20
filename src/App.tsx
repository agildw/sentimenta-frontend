import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [sentiment, setSentiment] = useState("");
  const [message, setMessage] = useState({
    loading: false,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const review = (
      e.currentTarget.elements.namedItem("movie-review") as HTMLInputElement
    )?.value;

    const data = new FormData();
    data.append("review", review);

    setSentiment("");

    setMessage({ loading: true, message: "Loading..." });

    axios
      .post(`${import.meta.env.VITE_API_URL}/predict`, data)
      .then((res) => {
        setMessage({ loading: false, message: "" });
        setSentiment(res.data.prediction);
      })
      .catch((err) => {
        setMessage({
          loading: false,
          message: err?.response?.data || "Something went wrong",
        });
      });
  };
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <div className="App">
      <section className="pt-10 overflow-hidden sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Sentimenta
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Sentimenta is a movie review sentiment analysis tool that uses
              machine learning to predict the sentiment of a movie review.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="p-4 mx-auto">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="font-bold text-sm">
                    At the moment, we can only accept reviews written in
                    English.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-8">
            <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <textarea
                  className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-auto"
                  id="movie-review"
                  name="movie-review"
                  placeholder="Enter your movie review"
                  onChange={handleReviewChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  disabled={message.loading}
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>

          {message.message && (
            <div className="max-w-lg mx-auto mt-12">
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-3 bg-blue-400">
                      <i className="fas fa-exclamation fa-2x fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h3 className="font-bold text-lg">{message.message}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sentiment && (
            <div className="max-w-lg mx-auto mt-12">
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center">
                  <div className="flex-shrink pr-4">
                    <div
                      className={
                        sentiment === "positive"
                          ? "rounded-full p-3 bg-green-400"
                          : "rounded-full p-3 bg-red-400"
                      }
                    >
                      <i className="fas fa-check fa-2x fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <h3 className="font-bold text-lg">{sentiment}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
