const { useRef, useEffect } = require('react');

const useEffectOnce = (callback) => {
  const calledOnce = useRef(false);
  useEffect(() => {
    if (!calledOnce.current) {
      callback();
      calledOnce.current = true;
    }
  }, [callback]);
};
export default useEffectOnce;
