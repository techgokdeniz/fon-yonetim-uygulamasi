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
import { set, z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const registerSchema = z.object({
  name: z.string().nonempty().min(2),
  surname: z.string().nonempty().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

const RegisterCard = ({ title, description }) => {
  const { toast } = useToast();
  const router = useRouter();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      try {
        registerSchema.parse({ name, surname, email, password });
      } catch (error) {
        setLoading(false);
        return toast({
          description: error.errors[0].message + " " + error.errors[0].path,
          title: "Başarısız",
          variant: "destructive",
        });
      }

      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, surname, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return toast({
          title: "Başarısız",
          variant: "destructive",
          description: "Bir hata oluştu",
        });
      }
      setLoading(false);
      toast({
        title: "Başarılı",
        variant: "success",
        description: "Başarılı bir şekilde kayıt olundu.",
      });

      return router.push("/login");
    } catch (error) {
      setLoading(false);
      return toast({
        title: "Hata",
        variant: "destructive",
        description: "Bir hata oluştu",
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
          <Label htmlFor="name">Ad</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Gökhan"
          />
        </div>
        <div>
          <Label htmlFor="email">Soyad</Label>
          <Input
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            id="surname"
            placeholder="Çetin"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="admin@fonyonetimi.app"
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
        <Button disabled={loading} onClick={handleRegister}>
          Kayıt Ol
        </Button>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center gap-1 items-center w-full">
          Bir hesabınız var mı?{" "}
          <Link href="/login">
            <span className="font-semibold text-red-800">Giriş Yap</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
