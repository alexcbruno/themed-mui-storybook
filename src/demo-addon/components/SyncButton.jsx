import React, { useState } from "react";
import { Icons, IconButton } from "@storybook/components";

import { syncStorybook } from "../api";

export const SyncButton = ({ active }) => {
  const [loading, setLoading] = useState(false);

  const sync = async () => {
    setLoading(true);
    const searchParams = new URLSearchParams(window.location.search);
    let anima_t = searchParams.get("anima_t");
    await syncStorybook(anima_t);
    setLoading(false);
  };

  return (
    <IconButton
      disabled={loading}
      active={active}
      title="Demo-Anima"
      onClick={sync}
    >
      {loading === false ? <Icons icon="merge" /> : <div>Cooking</div>}
    </IconButton>
  );
};
