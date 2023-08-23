import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const LoginCard = ({ title, description }) => {
  const { toast } = useToast();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Zod şema tanımlama
    const loginSchema = z.object({
      email: z.string().email("Geçerli bir email adresi giriniz."),
      password: z.string().min(6, "Şifre en az 6 karakter olmalıdır."),
    });

    try {
      // Zod şemasını kullanarak email ve şifre kontrolü yapma
      try {
        loginSchema.parse({ email, password });
      } catch (error) {
        return toast({
          description: error.errors[0].message,
          title: "Başarısız",
          variant: "destructive",
        });
      }

      // Kullanıcı girişi
      const user = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!user.error) {
        toast({
          title: "Başarılı",
          variant: "success",
          description: "Başarılı bir şekilde giriş yapıldı.",
        });

        router.push("/dashboard");
      } else {
        toast({
          title: "Başarısız",
          variant: "destructive",
          description: "Giriş yapılamadı.",
        });
      }
    } catch (error) {
      toast({
        description: error.message,
        title: "Başarısız",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="password"
          />
        </div>
        <Button onClick={handleLogin}>Log in</Button>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
