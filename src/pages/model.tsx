import { useModel } from 'umi';

export default () => {
  const message = useModel('demo');
  return <div>{message}</div>;
};