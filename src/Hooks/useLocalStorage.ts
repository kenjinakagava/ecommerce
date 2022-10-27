type Props = {
  localPath: string;
};

const useLocalStorage = (props: Props) => {
  const isStored = localStorage.getItem(props.localPath) ? true : false;
  return isStored;
};

export default useLocalStorage;
