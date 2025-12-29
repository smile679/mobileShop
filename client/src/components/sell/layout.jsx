import banner from "../../assets/aboutBanner.png"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useState } from "react";
import Sell from "../form/Sell";
import Exchange from "../form/exchange";

function SellItem() {
  const [ sellOption, setSellOption ] = useState('exchange')

  return ( 
    <div className="w-full flex flex-col mt-15">
      <div>
       <img src={banner} className="w-full max-h-80" />
      </div>
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>
              <RadioGroup 
                defaultValue={sellOption} 
                className="flex"
                onValueChange={(value) => {
                  setSellOption(value)
                  console.log(value);
                  
                }}
                >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exchange" id="exchange" />
                  <Label htmlFor="exchange">Exchange</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sell" id="sell" />
                  <Label htmlFor="sell">Sell</Label>
                </div>
              </RadioGroup>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="p-5">
             <Sell sellOption={sellOption}/>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
   );
}

export default SellItem;