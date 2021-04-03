import axios from "axios";

// setting environment 
// const local = true;
// const env = local ? "http://localhost:3001" : "";

export default {
  // Gets all questions with a topic id of (id)
  getQuestion: function(id) {
    return axios.get("/api/question/" + id);
  },
  // Gets all answers with a question id of (id)
  getAnswers: function(id) {
    return axios.get("/api/question/" + id);
  },

  
  // Saves a score to the database
//   saveScore: function(userScore) {
//     return axios.post("/api/???", userScore);
//   }
};
