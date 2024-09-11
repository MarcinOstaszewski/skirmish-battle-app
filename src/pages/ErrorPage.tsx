import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div>
      <h1>An unexpected error has occurred.</h1>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
}