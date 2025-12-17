import NewProducts from "./NewProducts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import UsedProducts from "./UsedProducts";

function HomeProducts() {
 
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col p-5 sm:p-10">
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
    </div>
  );
}

export default HomeProducts;
