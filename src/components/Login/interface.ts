export interface LoginProps {
  onSubmit?: (email: string, password: string) => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
}