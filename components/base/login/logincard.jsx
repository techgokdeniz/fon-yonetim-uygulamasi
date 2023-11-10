import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/auth/authSlice";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginCard = ({ title, description }) => {
  const { toast } = useToast();
  const dispatch = useDispatch();
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

      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!data.error) {
        toast({
          title: "Başarılı",
          variant: "success",
          description: "Başarılı bir şekilde giriş yapıldı.",
        });

        dispatch(setUser(data.data));

        router.push("/dashboard");
      } else {
        return toast({
          title: "Başarısız",
          variant: "destructive",
          description: "Giriş yapılamadı.",
        });
      }
    } catch (error) {
      return toast({
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
            placeholder="admin@fonyonetim.app"
          />
        </div>
        <div>
          <Label htmlFor="password">Şifre</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="*******"
          />
        </div>
        <Button onClick={handleLogin}>Giriş Yap</Button>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center gap-1 items-center w-full">
          Bir hesabınız yok mu?{" "}
          <Link href="/register">
            <span className="font-semibold text-red-800">Kayıt Ol</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
