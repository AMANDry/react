import axios, { AxiosError } from 'axios';

export const setErrorNotification = (
  error: unknown,
  setErrorMessage: (message: string) => void
) => {
  if (axios.isAxiosError(error)) {
    setErrorMessage(
      (error as AxiosError<{ message: string }>).response?.data.message ||
        'Unknown error'
    );
  } else if (typeof error === 'string') {
    setErrorMessage(error);
  } else if (error instanceof Error) {
    setErrorMessage(error.message);
  }
};
