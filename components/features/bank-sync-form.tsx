"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function BankSyncForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  return (
    <div className="p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="business">Your bank</Label>
          <Select
            value={formData.business}
            onValueChange={(value) =>
              setFormData({ ...formData, business: value })
            }
          >
            <SelectTrigger id="business">
              <SelectValue placeholder="Select your bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chase">Chase</SelectItem>
              <SelectItem value="bankofamerica">Bank of America</SelectItem>
              <SelectItem value="wellsfargo">Wells Fargo</SelectItem>
              <SelectItem value="citibank">Citibank</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional information</Label>
          <Textarea
            id="message"
            placeholder="Any specific requirements or questions?"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <Button className="w-full" size="lg">
          Connect Securely
        </Button>

        <p className="text-sm text-center text-muted-foreground mt-4">
          Your data is encrypted and secure. We never store your banking
          credentials.
        </p>
      </div>
    </div>
  );
}
