import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Feedback, FeedbackForm } from "../interfaces";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDoc from "./PDFDoc";
import "../App.css";

const FeedbackPage: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });

  const [lastFeedback, setLastFeedback] = useState<Feedback | null>(null);

  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors, isValid }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<FeedbackForm>({
    mode: "onBlur", // параметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const finalizeFeedback = (feedback: Feedback) => {
    const updatedFeedbackList = [...feedbackList, feedback];
    setFeedbackList(updatedFeedbackList);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbackList));
    reset();
  };

  const submitFeedback = (data: FeedbackForm) => {
    const newFeedback: Feedback = {
      name: data.name,
      performance: data.performance,
      feedback: data.feedback,
      picture: "",
    };

    if (data.picture && data.picture.length > 0) {
      const file = data.picture[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          newFeedback.picture = e.target.result as string;
          finalizeFeedback(newFeedback);
        }
      };
      reader.readAsDataURL(file);
    } else {
      finalizeFeedback(newFeedback);
    }

    // Обновление списка отзывов с добавлением нового отзыва
    const updatedFeedbackList = [...feedbackList, newFeedback];
    setFeedbackList(updatedFeedbackList);
    setLastFeedback(newFeedback);

    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbackList));

    // Очистка формы после отправки
    reset();
  };

  return (
    <div className="feedback-form">
      <h4>Рады видеть Вас на сайте нашего театра!</h4>
      <p>Оставьте здесь, пожалуйста, Ваш отзыв о постановке, нам это важно. Спасибо!</p>
      <form onSubmit={handleSubmit(submitFeedback)} noValidate>
        <input
          {...register("name", {
            required: "Это поле обязательно для заполнения",
          })}
          placeholder="Ваши ФИ"
        />
        <div>{errors.name?.message}</div>

        <input
          {...register("email", {
            required: "Это поле обязательно для заполнения",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Некорректный email",
            },
          })}
          placeholder="Ваша почта"
        />
        <div>{errors.email?.message}</div>

        <input
          {...register("performance", {
            required: "Пожалуйста, укажите спектакль",
          })}
          placeholder="Название спектакля"
        />
        <div>{errors.performance?.message}</div>

        <textarea
          {...register("feedback", {
            required: "Поле отзыва не может быть пустым",
          })}
          placeholder="Ваш отзыв"
          rows={5}
        ></textarea>
        <div>{errors.feedback?.message}</div>

        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Необходимо выбрать файл",
          })}
        />
        <div>{errors.picture?.message}</div>

        <button type="submit" disabled={!isValid}>
          Отправить
        </button>
      </form>

      {lastFeedback && (
        <PDFDownloadLink
          document={
            <PDFDoc
              name={lastFeedback.name}
              performance={lastFeedback.performance}
              feedback={lastFeedback.feedback}
              picture={lastFeedback.picture}
            />
          }
          fileName="отзыв.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      )}

      <div className="feedback-list">
        <p>все отзывы</p>
        {feedbackList.length > 0 ? (
          feedbackList.map((feedback, index) => (
            <div key={index}>
              <strong>
                <p>
                  {feedback.name} о спектакле {feedback.performance} :
                </p>
              </strong>
              <p>{feedback.feedback}</p>
            </div>
          ))
        ) : (
          <p>Пока нет отзывов.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
