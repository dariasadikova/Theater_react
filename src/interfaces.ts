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
  