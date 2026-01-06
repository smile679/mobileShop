import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  device_brands,
  storage_options,
  ram_options,
  battery_options,
} from "../../constants/DeviceOptions";
import { useState } from "react";

function Exchange({ sellOption }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: "",
    device: "samsung",
    storage: "32",
    ram: "3",
    battery: "80-100",
    ex_model: "",
    ex_storage: "32",
    ex_device: "samsung",
    ex_ram: "3",
    ex_battery: "80-100",
    description: "",
  });

  return (
    <form className="w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="name"
              placeholder="your name"
              required
              value={formData?.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Phone</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="+251-9XXXXXXX"
              required
              value={formData?.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold">Device Info</h2>
            <h3 className="font-semibold">Device</h3>
            <RadioGroup
              defaultValue={formData.device}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, device: value }))
              }
            >
              <div className="flex flex-wrap gap-3 sm:gap-5">
                {device_brands?.map((device) => (
                  <div
                    key={device.id}
                    className="flex items-center space-x-2 whitespace-nowrap"
                  >
                    <RadioGroupItem value={device?.id} id={device?.id} />
                    <Label htmlFor={device?.id}>{device?.name}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="model">Model</Label>
            <Input
              id="model"
              type="text"
              placeholder="Ex: samsung s21 ultra"
              required
              value={formData.model}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, model: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold">Storage</h3>
            <RadioGroup
              defaultValue={formData.storage}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, storage: value }))
              }
            >
              <div className="flex flex-wrap gap-3 sm:gap-5">
                {storage_options?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-2 whitespace-nowrap"
                  >
                    <RadioGroupItem value={item?.id} id={item?.id} />
                    <Label htmlFor={item?.id}>{item?.name}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {formData.device !== "iphone" ? (
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold">Ram</h3>
              <RadioGroup
                defaultValue={formData.ram}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, ram: value }))
                }
              >
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  {ram_options?.map((items) => (
                    <div
                      key={items.id}
                      className="flex items-center space-x-2 whitespace-nowrap"
                    >
                      <RadioGroupItem value={items?.id} id={items?.id} />
                      <Label htmlFor={items?.id}>{items?.name}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          ) : (
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold">Battery</h3>
              <RadioGroup
                defaultValue={formData.battery}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, battery: value }))
                }
              >
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  {battery_options?.map((items) => (
                    <div
                      key={items.id}
                      className="flex items-center space-x-2 whitespace-nowrap"
                    >
                      <RadioGroupItem value={items?.id} id={items?.id} />
                      <Label htmlFor={items?.id}>{items?.name}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        {sellOption === "exchange" && (
          <div className="w-full flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-3">
              <h3 className="font-semibold">Exchange To</h3>
              <RadioGroup
                defaultValue={formData.ex_device}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, ex_device: value }))
                }
              >
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  {device_brands?.map((device) => (
                    <div
                      key={device.id}
                      className="flex items-center space-x-2 whitespace-nowrap"
                    >
                      <RadioGroupItem value={device?.id} id={device?.id} />
                      <Label htmlFor={device?.id}>{device?.name}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                type="text"
                placeholder="Ex: samsung s21 ultra"
                required
                value={formData.ex_model}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, ex_model: e.target.value }))
                }
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold">Storage</h3>
              <RadioGroup
                defaultValue={formData.ex_storage}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, ex_storage: value }))
                }
              >
                <div className="flex flex-wrap gap-3 sm:gap-5">
                  {storage_options?.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-2 whitespace-nowrap"
                    >
                      <RadioGroupItem value={item?.id} id={item?.id} />
                      <Label htmlFor={item?.id}>{item?.name}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {formData.ex_device !== "iphone" ? (
              <div className="flex flex-col gap-y-2">
                <h3 className="font-semibold">Ram</h3>
                <RadioGroup
                  defaultValue={formData.ex_ram}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, ex_ram: value }))
                  }
                >
                  <div className="flex flex-wrap gap-3 sm:gap-5">
                    {ram_options?.map((items) => (
                      <div
                        key={items.id}
                        className="flex items-center space-x-2 whitespace-nowrap"
                      >
                        <RadioGroupItem value={items?.id} id={items?.id} />
                        <Label htmlFor={items?.id}>{items?.name}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            ) : (
              <div className="flex flex-col gap-y-2">
                <h3 className="font-semibold">Battery</h3>
                <RadioGroup
                  defaultValue={formData.ex_battery}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, ex_battery: value }))
                  }
                >
                  <div className="flex flex-wrap gap-3 sm:gap-5">
                    {battery_options?.map((items) => (
                      <div
                        key={items.id}
                        className="flex items-center space-x-2 whitespace-nowrap"
                      >
                        <RadioGroupItem value={items?.id} id={items?.id} />
                        <Label htmlFor={items?.id}>{items?.name}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="description">
                Description{" "}
                <span className="text-sm text-muted-foreground">
                  (optional)
                </span>
              </Label>
              <Textarea
                id="description"
                placeholder="Type your message here."
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        )}
      </div>

      <Button type="submit" className="mt-5 w-full sm:w-auto">
        Submit
      </Button>
    </form>
  );
}

export default Exchange;