import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  const dataFromState = useSelector(getContacts);
  const isLoading = dataFromState.isLoading;

  return (
    <div className="Loader">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#030303"
        barColor="#010101"
        visible={isLoading}
      />
    </div>
  );
};
