import { ThreeDots } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      wrapperStyle={{
        marginTop: 150,
        width: 80,
        marginLeft: '50%',
        transform: 'translateX(-50%)',
      }}
      color="rgb(136, 106, 106)"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};
