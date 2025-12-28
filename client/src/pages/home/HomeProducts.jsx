import NewProducts from "./NewProducts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import UsedProducts from "./UsedProducts";
import { Link } from "react-router-dom";

function HomeProducts() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-5 sm:px-10 py-10 mb-10">
      <Tabs defaultValue="new" className="w-full gap-5">
        <TabsList>
          <TabsTrigger value="new" className="text-md">
            New Arraival
          </TabsTrigger>
          <TabsTrigger value="used" className="text-md">
            Used Products
          </TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          <NewProducts />
        </TabsContent>
        <TabsContent value="used">
          <UsedProducts />
        </TabsContent>
      </Tabs>
      <Link 
      to="/products"
      className="mt-8 text-lg font-semibold cursor-pointer hover:scale-110 text-gray-900">
        Load more
      </Link>
    </div>
  );
}

export default HomeProducts;
