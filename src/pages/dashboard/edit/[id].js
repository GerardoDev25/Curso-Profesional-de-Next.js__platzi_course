import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import endPoints from "@services/api";

import { FormProduct } from "@components/FormProducts";

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
  }, [router.isReady, router.query]);

  return <FormProduct product={product} />;
}
