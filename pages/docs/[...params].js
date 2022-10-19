import React from "react";
import { useRouter } from "next/router";

const Document = () => {
  const router = useRouter();
  const params = router.query.params;
  console.log(params);
  return <div>Document</div>;
};

export default Document;
