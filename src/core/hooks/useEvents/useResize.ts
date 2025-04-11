import { useEffect } from "react";

import useEventListener from "./useEventListener";
import { EventTypes } from "@/core/types";

const useResize = (callBack: EventTypes.CallBack, { onChangeOnly = false }) => {
  useEventListener("resize", callBack);

  useEffect(() => {
    if (!onChangeOnly) (callBack as () => void)();
  }, []);
};

export default useResize;
