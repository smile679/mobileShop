import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function Sell() {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Name</Label>
          <Input id="name" type="name" placeholder="your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Phone</Label>
          <Input id="phone" type="phone" placeholder="+251-9XXXXXXX" required />
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold">Device Info</h3>
          <RadioGroup defaultValue="samsung">
            <div className="flex gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="samsung" id="samsung" />
                <Label htmlFor="option-one">Samsung</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="iphone" id="iphone" />
                <Label htmlFor="iphone">Iphone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tecno" id="tecno" />
                <Label htmlFor="tecno">Tecno</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="othere" id="othere" />
                <Label htmlFor="othere">Othere</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Model</Label>
          <Input
            id="model"
            type="text"
            placeholder="ex samsung s21 ultra"
            required
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold">Storage</h3>
          <RadioGroup defaultValue="32" onValueChange={()=>console.log("storage", value)
          }>
            <div className="flex gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="32" id="32" />
                <Label htmlFor="32">32 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="64" id="64" />
                <Label htmlFor="64">64 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="128" id="128" />
                <Label htmlFor="128">128 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="256" id="256" />
                <Label htmlFor="256">256 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="512" id="512" />
                <Label htmlFor="512">512 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1tr" id="1tr" />
                <Label htmlFor="1tr">1 Tr</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold">Ram</h3>
          <RadioGroup 
            defaultValue="3"
            onValueChange={()=>console.log("ram", value)
          }>
            <div className="flex gap-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="3" />
                <Label htmlFor="3">3 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4" id="4" />
                <Label htmlFor="4">4 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="6" id="6" />
                <Label htmlFor="6">6 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="8" id="8" />
                <Label htmlFor="8">8 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="12" id="12" />
                <Label htmlFor="12">12 Gb</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">
            Description
            <span className="text-sm text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Type your message here."
          />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default Sell;