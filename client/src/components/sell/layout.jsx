import banner from "../../assets/aboutBanner.png"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useState } from "react";
import Sell from "../form/Sell";

function SellItem() {
  const [ sellOption, setSellOption ] = useState('exchange')

  return ( 
    <div className="w-full flex flex-col mt-15">
      <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden">
        <img
          src={banner}
          alt="Exchange banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pretty leading-tight max-w-2xl animate-pulse">
            exchange your Phone With iPhone 17 Pro Max
          </h2>
        </div>
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