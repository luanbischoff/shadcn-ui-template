import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AsideMenu from "@/components/aside-menu";
import NavMenu from "@/components/nav-menu";
import Link from "next/link";

export default function CriarConta() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AsideMenu />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <NavMenu />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Link href="contas">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Voltar</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Criar conta
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Descartar
                </Button>
                <Button size="sm">Finalizar conta</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Sockpuppet (Perfil)</CardTitle>
                    <CardDescription>
                      Clique para copiar informações do perfil
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Samara Oliveira"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Data de nascimento</Label>
                        <Input
                          id="description"
                          defaultValue="09/08/2000"
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">CPF</Label>
                        <Input
                          id="description"
                          defaultValue="000.000.000-00"
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Estado</Label>
                        <Input
                          id="description"
                          defaultValue="RS"
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Recado</Label>
                        <Input
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet."
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Grupos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-full">Link</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            https://chat.whatsapp.com/Jkza1eDi3PmIaK6GaIwOvH
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            https://chat.whatsapp.com/Di3PmIaK6GaIwOvHJkza1e
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            https://chat.whatsapp.com/JIaK6GaIwOvHkza1eDi3Pm
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            https://chat.whatsapp.com/i3PmIaK6GaIwOvHJkza1eD
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            https://chat.whatsapp.com/PmIaK6GaIwOvHJkza1eDi3
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Informações do Chip</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Tipo</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Selecione o tipo"
                          >
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clothing">Físico</SelectItem>
                            <SelectItem value="electronics">Virtual</SelectItem>
                            <SelectItem value="accessories">
                              Físico recuperado
                            </SelectItem>
                            <SelectItem value="accessories">
                              Plano TIM
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">Número</Label>
                        <Input placeholder="Digite o número" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                          Chip ID (Somente físico)
                        </Label>
                        <Input placeholder="Digite o ID" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Foto do perfil</CardTitle>
                    <CardDescription>
                      Clique para baixar a foto do perfil.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md bg-black object-cover"
                        height="300"
                        src="/placeholder.svg"
                        width="300"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Dispositivo associado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="tablet">Tablet</Label>
                        <Select>
                          <SelectTrigger
                            id="tablet"
                            aria-label="Selecione o tablet"
                          >
                            <SelectValue placeholder="Selecione o tablet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tablet-01">Tablet 01</SelectItem>
                            <SelectItem value="tablet-02">Tablet 02</SelectItem>
                            <SelectItem value="tablet-03">Tablet 03</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger
                            id="tablet-instance"
                            aria-label="Selecione a instância"
                          >
                            <SelectValue placeholder="Selecione a instância" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tablet-01">
                              Instância 01
                            </SelectItem>
                            <SelectItem value="tablet-02">
                              Instância 02
                            </SelectItem>
                            <SelectItem value="tablet-03">
                              Instância 03
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="notebook">Notebook</Label>
                        <Select>
                          <SelectTrigger
                            id="notebook"
                            aria-label="Selecione o notebook"
                          >
                            <SelectValue placeholder="Selecione o notebook" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="notebook-01">
                              Notebook 01
                            </SelectItem>
                            <SelectItem value="notebook-02">
                              Notebook 02
                            </SelectItem>
                            <SelectItem value="notebook-03">
                              Notebook 03
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger
                            id="notebook-instance"
                            aria-label="Selecione a instância"
                          >
                            <SelectValue placeholder="Selecione a instância" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="notebook-01">
                              Instância 01
                            </SelectItem>
                            <SelectItem value="notebook-02">
                              Instância 02
                            </SelectItem>
                            <SelectItem value="notebook-03">
                              Instância 03
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Finalizar conta</CardTitle>
                    <CardDescription>
                      Clique no botão abaixo para finalizar esta conta.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Finalizar conta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
