export interface PlayType {
  id: number;
  title: string;
  genre: string;
  director: string;
}

export interface NavbarProps {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export interface Feedback {
  name: string;
  performance: string;
  feedback: string;
  picture: string;
}

export interface FeedbackForm {
  name: string;
  email: string;
  performance: string;
  feedback: string;
  picture: FileList;
}

export interface PDFDocProps {
  name: string;
  performance: string;
  feedback: string;
  picture: string;
}
