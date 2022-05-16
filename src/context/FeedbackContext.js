import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This is from context",
      rating: 3,
    },
    {
      id: 3,
      text: "This is from context",
      rating: 4,
    },
    {
      id: 4,
      text: "This is from context",
      rating: 7,
    },
  ]);

  const [feedbackEdit , setFeedbackEdit] = useState({
      item:{},
      edit: false
  })
 
  const deleteFeedback = (id) => {
    if (window.confirm("Are You sure want to delete this item?")) {
      let value = feedback.filter((item) => item.id !== id);
      setFeedback(value);
    }
    // setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  //Set item to be updated
  const editFeedback = (item) =>
  {
      setFeedbackEdit({
          item,
          edit : true
      })
  }

  //Update Feedback Item 
  const UpdateFeedback = (id, updItem) =>
  {
     setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        UpdateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
