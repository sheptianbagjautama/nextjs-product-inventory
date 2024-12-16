import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductTable from "../Products/ProductTable";

export default function AppTable() {
  return (
    <Card className="mt-12 flex flex-col shadow-none poppins border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between p-2">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className="text-sm text-slate-600">34 Products</p>
          </div>
          <Button>Add Products</Button>
        </div>
      </CardHeader>

      <CardContent>
        <ProductTable />
      </CardContent>
    </Card>
  );
}
