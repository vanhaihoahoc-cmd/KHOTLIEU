
export enum View {
  HOME = 'HOME',
  CATEGORY_CHOICE = 'CATEGORY_CHOICE',
  ADMIN_LOGIN = 'ADMIN_LOGIN',
  ADMIN_PORTAL = 'ADMIN_PORTAL',
  STUDENT_PORTAL = 'STUDENT_PORTAL'
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
}

export interface DocumentRecord {
  id: string;
  name: string;
  questionLink: string;
  answerLink: string;
  solutionLink: string;
  password?: string;
  categoryId: string;
}
