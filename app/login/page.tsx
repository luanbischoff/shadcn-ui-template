import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: 'Login',
    template: `%s - ${siteConfig.name}`,
  },
};

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Entrar</CardTitle>
          <CardDescription>
            Coloque suas informações para entrar no sistema.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Primeiro nome</Label>
                <Input id="first-name" placeholder="Fulano" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Identificador</Label>
                <Input id="last-name" placeholder="001" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="fulano@800k.com.br"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="*********" />
            </div>
            <Button type="submit" className="w-full" variant={'secondary'}>
              Entrar na conta
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
