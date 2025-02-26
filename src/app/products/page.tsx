import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-md border border-red-500 p-5">
      <h1 className="text-red-500">Product Page</h1>
      <Button> FWS 7.0</Button>
      <Input placeholder="bora fechar esse projeto" />
    </div>
  );
};

export default ProductPage;
